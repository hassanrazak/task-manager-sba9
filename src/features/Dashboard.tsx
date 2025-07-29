import { Container, Box, Typography, Button } from "@mui/material";
import TaskList from "../components/TaskList/TaskList";
import { useEffect, useState } from "react";
import type { Task, TaskStatus } from "../types";
import TaskFilter from "../components/TaskFilter/TaskFilter";
import { useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import AddTaskModal from "../components/AddTaskModal/AddTaskModal";
import TaskSearchBar from "../components/TaskFilter/TaskSearchBar";


const Dashboard: React.FC = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
    searchTerm?:string
  }>({});

  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const theme = useTheme();

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

  const handleAddTask = (task: Task) => {
    setTaskList((prev) => [task, ...prev]); // Add new task at the top
  };

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters, 
      [name]:value
    }))
  }
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
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        mb={2}
        width="100%" 
      >
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
          onClick={() => setAddModalOpen(true)}
        >
          Add Task
        </Button>

        <TaskSearchBar onSearch={handleSearch}/>
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
            tasks={filteredTasks}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />
        </Box>
      </Box>

      <AddTaskModal
        open={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAdd={handleAddTask}
        nextId={String(taskList.length + 1)}
      />
    </Container>
  );
};

export default Dashboard;
