import type { Task } from "./schemas";

let idCounter = 1;
let tasks: Task[] = [
  { id: idCounter++, title: "Read the Next.js docs", done: true },
  { id: idCounter++, title: "Migrate to App Router", done: false },
  { id: idCounter++, title: "Add Server Components", done: false },
];

export async function simulateFetchTasks({ delayMs = 300 }: { delayMs?: number } = {}) {
  return new Promise<Task[]>((resolve) => {
    setTimeout(() => {
      resolve([...tasks]);
    }, delayMs);
  });
}
