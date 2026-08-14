import { beforeEach, describe, expect, it } from "vitest";
import { addTask, clearTasks, listTasks, toggleTask } from "./store";

describe("task store", () => {
  beforeEach(() => {
    clearTasks();
  });

  it("starts empty", () => {
    expect(listTasks()).toEqual([]);
  });

  it("adds a task", () => {
    const task = addTask("Write docs");
    expect(task.title).toBe("Write docs");
    expect(task.done).toBe(false);
    expect(listTasks()).toHaveLength(1);
  });

  it("trims titles and rejects empty ones", () => {
    expect(addTask("  padded  ").title).toBe("padded");
    expect(() => addTask("   ")).toThrow(/must not be empty/);
  });

  it("toggles completion", () => {
    const task = addTask("Ship it");
    expect(toggleTask(task.id)?.done).toBe(true);
    expect(toggleTask(task.id)?.done).toBe(false);
  });

  it("returns undefined when toggling an unknown id", () => {
    expect(toggleTask("does-not-exist")).toBeUndefined();
  });
});
