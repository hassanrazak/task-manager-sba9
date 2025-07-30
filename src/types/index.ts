export type TaskStatus = "pending" | "in-progress" | "completed";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: "low" | "medium" | "high";
  dueDate: string;
}

export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (task: Task) => void;
 handleEditTask:(updatedTask: Task) => void;
 sortBy: string;
  sortOrder: "asc" | "desc";
  handleSort: (field: "priority" | "dueDate" | "status"| "title" |"description") => void;
}

export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (task: Task) => void;
  handleEditTask:(updatedTask: Task) => void;
}

export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }) => void;
}
export interface TaskSearchBarProps {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface AddTaskModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (task: Task) => void;
  nextId: string;
  taskToEdit?: Task | null;
  onUpdate?: (task: Task) => void;
}


export interface ConfirmDeleteModalProps {
  task: Task | null;
  open: boolean;
  onClose: () => void;
  onConfirm: (taskId:string) => void;
}
