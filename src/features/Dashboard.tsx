import { Container, Box, Typography } from "@mui/material";
import TaskList from "../components/TaskList/TaskList";
import { useEffect, useState } from "react";
import type { Task, TaskStatus } from "../types";
import TaskFilter from "../components/TaskFilter/TaskFilter";
import { useTheme } from "@mui/material/styles";

const Dashboard: React.FC = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }>({});

  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      fetch("/tasks.json")
        .then((res) => res.json())
        .then((data: Task[]) => setTaskList(data));
    }, 1000);
  }, []);

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
    return statusMatch && priorityMatch;
  });

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDelete = (taskId: string) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
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
      <Box py={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Task Manager
        </Typography>
        <Box mb={2}>
          <TaskFilter onFilterChange={handleFilterChange} />
        </Box>
        <Box>
          <TaskList
            tasks={filteredTasks}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
