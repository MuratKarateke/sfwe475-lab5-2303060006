import React from "react";
import type { Task } from "@/lib/schemas";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onToggle, onDelete }: { tasks: Task[]; onToggle: (id: number) => void; onDelete: (id: number) => void }) {
  return (
    <ul style={{ padding: 0 }}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
