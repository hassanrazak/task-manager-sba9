import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import type { TaskItemProps, TaskStatus } from "../../types";

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onStatusChange,
  onDelete,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      <Box sx={{ width: "50%" }}>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
        <Box display="flex" gap={2} mt={1}>
          <Typography>
            Priority: <strong>{task.priority}</strong>
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 1,
        }}
      >
        <FormControl size="small" fullWidth sx={{ maxWidth: 200 }}>
          <InputLabel>Set Status</InputLabel>
          <Select
            value={task.status}
            label="Set Status"
            onChange={(e) =>
              onStatusChange(task.id, e.target.value as TaskStatus)
            }
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="in-progress">In-Progress</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default TaskItem;
