import { Container, Box, Typography, CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box py={4}>
          <Typography variant="h4" align="center" gutterBottom>
            Task Manager
          </Typography>
          <Box mb={2}>{/* <TaskFilter /> */}</Box>
          <Box>{/* <TaskList /> */}</Box>
        </Box>
      </Container>
    </>
  );
}

export default App;
