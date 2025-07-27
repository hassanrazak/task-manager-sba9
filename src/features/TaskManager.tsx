import { Container, Box, Typography } from "@mui/material";

const TaskManager = () => {
  return (
    <Container maxWidth="xl">
      <Box py={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Task Manager
        </Typography>
        <Box mb={2}>{/* <TaskFilter /> */}</Box>
        <Box>{/* <TaskList /> */}</Box>
      </Box>
    </Container>
  );
};

export default TaskManager;
