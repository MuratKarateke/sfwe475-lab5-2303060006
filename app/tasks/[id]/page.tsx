import Link from "next/link";
import { notFound } from "next/navigation";
import { z } from "zod";
import { getTask } from "@/lib/tasks";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const parsed = z.coerce.number().int().positive().safeParse(id);
  if (!parsed.success) return { title: `Task ${id} | Task Board` };
  const task = await getTask(parsed.data);
  return { title: task ? `${task.title} | Task Board` : `Task ${id} | Task Board` };
}

export default async function TaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const parsed = z.coerce.number().int().positive().safeParse(id);
  
  if (!parsed.success) notFound();
  
  const task = await getTask(parsed.data);
  if (!task) notFound();

  return (
    <main>
      <h2>{task.title}</h2>
      <p>{task.done ? "Done" : "Not done yet"}</p>
      <Link href="/tasks">Back to all tasks</Link>
    </main>
  );
}
