"use client";

import { useEffect, useState } from "react";
import type { Task } from "@/lib/store";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function loadTasks() {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data.tasks ?? []);
  }

  useEffect(() => {
    loadTasks().catch(() => setError("Failed to load tasks"));
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    if (!title.trim()) {
      setError("Please enter a task title");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Failed to add task");
      }
      setTitle("");
      await loadTasks();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function handleToggle(id: string) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  }

  return (
    <main className="container">
      <div className="brand">
        <h1>Evenox</h1>
        <span className="tag">task tracker</span>
      </div>
      <p className="subtitle">
        A minimal full-stack demo used to validate the development environment.
      </p>

      <div className="card">
        {error && <p className="error">{error}</p>}
        <form className="add" onSubmit={handleSubmit}>
          <input
            type="text"
            aria-label="New task title"
            placeholder="What needs doing?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Adding…" : "Add task"}
          </button>
        </form>

        {tasks.length === 0 ? (
          <p className="empty">No tasks yet — add your first one above.</p>
        ) : (
          <ul className="tasks">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={task.done ? "task done" : "task"}
              >
                <input
                  className="check"
                  type="checkbox"
                  checked={task.done}
                  onChange={() => handleToggle(task.id)}
                  aria-label={`Mark ${task.title} as done`}
                />
                <span className="title">{task.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
