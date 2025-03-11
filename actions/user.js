// "use server";

// import {db} from "@/lib/prisma";
// import {auth} from "@clerk/nextjs/server";
// import { generateAIInsights } from "./dashboard";
// // import { revalidatePath } from "next/cache";

// export async function updateUser(data) {
//   const {userId} = await auth();
//   if (!userId) throw new Error("Unauthorized");
//   // else console.log("user is there");

//   const user = await db.user.findUnique({
//     where: {clerkUserId: userId},
//   });
//   if (!user) throw new Error("User not found");

//   try {
//     const result = await db.$transaction(
//       async (tx) => {
//         // find if the industry exists
//         let industryInsight = await tx.industryInsight.findUnique({
//           where: {
//             industry: data.industry,
//           },
//         });

//         // if doesnt exists, create it with default values, and replace it with ai later
//         if (!industryInsight) {
//           const insights = await generateAIInsights(data.industry);

//           industryInsight = await db.industryInsight.create({
//             data: {
//               industry: data.industry,
//               ...insights,
//               nextUpdate: new Date(Date.now() + (7 / 824) * 60 * 60 * 1000),
//             },
//           });
//         }
//         // update the user
//         const updatedUser = await tx.user.update({
//           where: {
//             id: user.id,
//           },
//           data: {
//             industry: data.industry,
//             experience: data.experience,
//             bio: data.bio,
//             skills: data.skills,
//           },
//         });
//         return {updatedUser, industryInsight};
//       },
//       {
//         timeout: 10000,
//       }
//     );
//     return {success: true, ...result};
//     // revalidatePath("/");
//     // return result.user;
//   } catch (error) {
//     console.error("error updating user and industry:", error.message);
//     throw new Error("failed to update profile");
//   }
// }

"use server";
import {db} from "@/lib/prisma";
import {auth} from "@clerk/nextjs/server";
import {generateAIInsights} from "./dashboard";

export async function updateUser(data) {
  const {userId} = await auth();
  console.log("Clerk userId:", userId);
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {clerkUserId: userId},
  });
  console.log("DB user lookup result:", user);
  if (!user) throw new Error("User not found!");

  try {
    const result = await db.$transaction(
      async (tx) => {
        let industryInsight = await tx.industryInsight.findUnique({
          where: {industry: data.industry},
        });

        if (!industryInsight) {
          const insights = await generateAIInsights(data.industry);
          industryInsight = await tx.industryInsight.create({
            data: {
              industry: data.industry,
              ...insights,
              nextUpdate: new Date(Date.now() + (7 / 824) * 60 * 60 * 1000),
            },
          });
        }

        const updatedUser = await tx.user.update({
          where: {id: user.id},
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });
        return {updatedUser, industryInsight};
      },
      {timeout: 10000}
    );
    return {success: true, ...result};
  } catch (error) {
    console.error("Transaction error:", error.message, error.stack);
    throw new Error("failed to update profile");
  }
}

export async function getUserOnboardingStatus() {
  const {userId} = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {clerkUserId: userId},
  });

  // if (!user) throw new Error("User not found");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });

    return {
      isOnboarded: !!user?.industry,
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    throw new Error("Failed to check onboarding status");
  }
}
