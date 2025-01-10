import { treaty } from "@elysiajs/eden";
import { TElysiaApp } from ".";
const url = process.env.NEXT_PUBLIC_API_URL ?? "localhost:3000";
export const elysia = treaty<TElysiaApp>(url, {
  fetch: {
    next: { revalidate: 0 },
  },
});
