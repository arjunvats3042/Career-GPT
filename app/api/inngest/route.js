import {serve} from "inngest/next";

// import {inngest} from "@/lib/inngest/client";
// import {generateIndustryInsights} from "@/lib/inngest/function";
// import { inngest } from "@/inngest/client";
import { generateIndustryInsights } from "@/inngest/function";
import { inngest } from "@/inngest/client";

export const {GET, POST, PUT} = serve({
  client: inngest,
  functions: [generateIndustryInsights],
});
