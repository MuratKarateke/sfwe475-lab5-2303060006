"use client";
import { useState } from "react";
import type { Task } from "@/lib/schemas";
import FilterBar from "./FilterBar";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";

export default function TaskBoard({ initialTasks }: { initialTasks: Task[] }) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<"all" | "done" | "open">("all");

  if (tasks.length === 0) {
    return <p>No tasks yet. Add your first one below.</p>;
  }

  const filteredTasks = tasks.filter((t) => {
    if (filter === "all") return true;
    if (filter === "done") return t.done;
    return !t.done;
  });

  const handleAddTask = (newTask: Task) => setTasks([...tasks, newTask]);
  const handleToggle = (id: number) => setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const handleDelete = (id: number) => setTasks(tasks.filter(t => t.id !== id));

  return (
    <div>
      <FilterBar filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} onToggle={handleToggle} onDelete={handleDelete} />
      <NewTaskForm onAdd={handleAddTask} />
    </div>
  );
}
