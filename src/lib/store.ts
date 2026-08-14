export interface Task {
  id: string;
  title: string;
  done: boolean;
  createdAt: string;
}

// In-memory task store. Persists for the lifetime of the server process, which
// is sufficient for local development and demonstrating the end-to-end flow.
const tasks: Task[] = [];

export function listTasks(): Task[] {
  return [...tasks].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function addTask(title: string): Task {
  const trimmed = title.trim();
  if (!trimmed) {
    throw new Error("Task title must not be empty");
  }

  const task: Task = {
    id: globalThis.crypto.randomUUID(),
    title: trimmed,
    done: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(task);
  return task;
}

export function toggleTask(id: string): Task | undefined {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.done = !task.done;
  }
  return task;
}

export function clearTasks(): void {
  tasks.length = 0;
}
