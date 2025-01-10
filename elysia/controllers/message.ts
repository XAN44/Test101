// message.ts
import Elysia, { t } from "elysia";

export const messageController = new Elysia({ prefix: "/message" }).get(
  "/",
  () => {
    const age = 30;
    const name = "Xan";
    return { name, age, message: `Hello My friend ${name} age ${age}` };
  },
  {
    response: t.Object({
      age: t.Number(),
      name: t.String(),
      message: t.String(),
    }),
  }
);
