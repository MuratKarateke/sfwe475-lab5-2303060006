import React from "react";

export default function FilterBar({ filter, setFilter }: { filter: string; setFilter: (f: "all" | "done" | "open") => void }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => setFilter("all")} disabled={filter === "all"}>All</button>
      <button onClick={() => setFilter("open")} disabled={filter === "open"}>Open</button>
      <button onClick={() => setFilter("done")} disabled={filter === "done"}>Done</button>
    </div>
  );
}
