import { Container, Box, Typography } from "@mui/material";
import TaskList from "../components/TaskList/TaskList";
import { useEffect, useState } from "react";
import type { Task } from "../types";
import TaskFilter from "../components/TaskFilter/TaskFilter";

const TaskManager = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("/tasks.json")
        .then((res) => res.json())
        .then((data: Task[]) => setTaskList(data));
    }, 1000);
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "#7f8796ff",
        color: "black",
        padding: 2,
        borderRadius: 2,
      }}
    >
      <Box py={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Task Manager
        </Typography>
        <Box mb={2}>
          <TaskFilter onFilterChange={() => {}} />
        </Box>
        <Box>
          <TaskList
            tasks={taskList}
            onStatusChange={() => {}} // placeholder to satisfy ts
            onDelete={() => {}} // placeholder to satisfy ts
          />
        </Box>
      </Box>
    </Container>
  );
};

export default TaskManager;
