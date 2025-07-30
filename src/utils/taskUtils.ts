import type { Task } from "../types";

export const getPriorityRank = (p: "low" | "medium" | "high"): number => {
  const rank: Record<string, number> = { low: 1, medium: 2, high: 3 };
  return rank[p];
};

export const getStatusRank = (s: "pending" | "in-progress" | "completed"): number => {
  const rank: Record<string, number> = {
    "pending": 1,
    "in-progress": 2,
    "completed": 3,
  };
  return rank[s];
};

export const sortTasks = (
  tasks: Task[],
  sortBy: "priority" | "dueDate" | "status" | "title" | "description" | "",
  sortOrder: "asc" | "desc"
): Task[] => {
  if (!sortBy) return tasks;

  return [...tasks].sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];

    if (sortBy === "dueDate") {
      return sortOrder === "asc"
        ? new Date(aVal).getTime() - new Date(bVal).getTime()
        : new Date(bVal).getTime() - new Date(aVal).getTime();
    }

    if (sortBy === "priority") {
      return sortOrder === "asc"
        ? getPriorityRank(aVal as "low" | "medium" | "high") - getPriorityRank(bVal as "low" | "medium" | "high")
        : getPriorityRank(bVal as "low" | "medium" | "high") - getPriorityRank(aVal as "low" | "medium" | "high");
    }

    if (sortBy === "status") {
      return sortOrder === "asc"
        ? getStatusRank(aVal as "pending" | "in-progress" | "completed") - getStatusRank(bVal as "pending" | "in-progress" | "completed")
        : getStatusRank(bVal as "pending" | "in-progress" | "completed") - getStatusRank(aVal as "pending" | "in-progress" | "completed");
    }

    return sortOrder === "asc"
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal));
  });
};