import { z } from "zod";

export const TaskSchema = z.object({
  id: z.number(),
  title: z.string().min(1),
  done: z.boolean(),
});

export type Task = z.infer<typeof TaskSchema>;
