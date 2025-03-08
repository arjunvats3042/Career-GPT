"use server";

export async function updateUSer(data) {
  const {userId} = await auth();
  if(!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {clerkUserId: userId},
  });
  if(!user) throw new Error("User not found");

  try {
    
  } catch (error) {
    
  }
}
