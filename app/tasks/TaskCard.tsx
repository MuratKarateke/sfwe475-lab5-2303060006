import Link from "next/link";
import type { Task } from "@/lib/schemas";

export default function TaskCard({ task, onToggle, onDelete }: { task: Task; onToggle: (id: number) => void; onDelete: (id: number) => void }) {
  return (
    <li style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0", listStyle: "none" }}>
      <h3>
        <Link href={`/tasks/${task.id}`}>{task.title}</Link>
      </h3>
      <p>{task.done ? "Status: Done" : "Status: Open"}</p>
      <button onClick={() => onToggle(task.id)}>Toggle</button>
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: "10px" }}>Delete</button>
    </li>
  );
}
