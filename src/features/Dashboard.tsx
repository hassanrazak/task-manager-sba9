import { Container, Box, Typography, Button } from "@mui/material";
import TaskList from "../components/TaskList/TaskList";
import { useEffect, useState } from "react";
import type { Task, TaskStatus } from "../types";
import TaskFilter from "../components/TaskFilter/TaskFilter";
import { useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import AddTaskModal from "../components/AddTaskModal/AddTaskModal";
import TaskSearchBar from "../components/TaskFilter/TaskSearchBar";
import ConfirmDeleteModal from "../components/AddTaskModal/ConfirmDeleteModal";
import { sortTasks } from "../utils/taskUtils";

const Dashboard: React.FC = () => {
  const theme = useTheme();

  const [taskList, setTaskList] = useState<Task[]>([]);
  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
    searchTerm?: string;
  }>({});

  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  const [sortBy, setSortBy] = useState<
    "priority" | "dueDate" | "status" | "title" | "description"| ""
  >("");

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (
    field: "priority" | "dueDate" | "status" | "title" | "description"
  ) => {
    if (sortBy === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("taskList");
    if (saved) {
      setTaskList(JSON.parse(saved));
      setIsInitialized(true);
    } else {
      fetch("/tasks.json")
        .then((res) => res.json())
        .then((data: Task[]) => {
          setTaskList(data);
          localStorage.setItem("taskList", JSON.stringify(data));
          setIsInitialized(true);
        });
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("taskList", JSON.stringify(taskList));
    }
  }, [taskList, isInitialized]);

  const handleFilterChange = (newFilters: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }) => {
    setFilters(newFilters);
  };

  const filteredTasks = taskList.filter((task) => {
    const statusMatch = !filters.status || task.status === filters.status;
    const priorityMatch =
      !filters.priority || task.priority === filters.priority;
    const searchMatch =
      !filters.searchTerm ||
      task.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(filters.searchTerm.toLowerCase());
    return statusMatch && priorityMatch && searchMatch;
  });

const sortedTasks = sortTasks(filteredTasks, sortBy, sortOrder);

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleRequestDelete = (task: Task) => {
    setTaskToDelete(task);
    setDeleteModalOpen(true);
  };

  const handleDelete = (taskId: string) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setDeleteModalOpen(false);
  };

  const handleAddTask = (task: Task) => {
    setTaskList((prev) => [task, ...prev]);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleEditTask = (task: Task) => {
    setTaskToEdit(task);
    setAddModalOpen(true);
  };

  const handleTaskUpdate = (updatedTask: Task) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setAddModalOpen(false);
    setTaskToEdit(null);
  };

  const handleCloseModal = () => {
  setAddModalOpen(false);
};

  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        padding: 3,
        borderRadius: 2,
        boxShadow: theme.shadows[3],
        border: `1px solid ${theme.palette.divider}`,
        margin: "30px auto",
      }}
    >
      <Box display="flex" alignItems="center" gap={2} mb={2} width="100%">
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          sx={{
            whiteSpace: "nowrap",
            px: 3,
            py: 1,
            borderRadius: 2,
            fontWeight: 600,
            textTransform: "none",
            boxShadow: 2,
            "&:hover": { boxShadow: 4 },
          }}
          onClick={() => {
            setTaskToEdit(null); // Clear any task being edited
            setAddModalOpen(true); // Open the modal
          }}
        >
          Add Task
        </Button>

        <TaskSearchBar onSearch={handleSearch} />
      </Box>
      <Box py={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Task Manager
        </Typography>
        <Box
          mb={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
          flexWrap="wrap"
        >
          <TaskFilter onFilterChange={handleFilterChange} />
        </Box>
        <Box>
          <TaskList
            tasks={sortedTasks}
            onStatusChange={handleStatusChange}
            onDelete={handleRequestDelete}
            handleEditTask={handleEditTask}
            sortBy={sortBy}
            sortOrder={sortOrder}
            handleSort={handleSort}
          />
        </Box>
      </Box>

      <AddTaskModal
        open={isAddModalOpen}
        onClose={handleCloseModal}
        onAdd={handleAddTask}
        nextId={String(taskList.length + 1)}
        taskToEdit={taskToEdit}
        onUpdate={handleTaskUpdate}
      />

      <ConfirmDeleteModal
        task={taskToDelete}
        open={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
      />
    </Container>
  );
};

export default Dashboard;
