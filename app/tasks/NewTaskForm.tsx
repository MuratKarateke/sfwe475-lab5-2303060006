import React, { useState } from "react";
import type { Task } from "@/lib/schemas";

export default function NewTaskForm({ onAdd }: { onAdd: (t: Task) => void }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ id: Date.now(), title, done: false });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New task..." />
      <button type="submit">Add Task</button>
    </form>
  );
}
