import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import type { Task, TaskItemProps, TaskStatus } from "../../types";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from '@mui/material/styles';

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onStatusChange,
  onDelete,
}) => {

  const theme = useTheme();


 const getStatusColor = (status: TaskStatus) => {
  switch (status) {
    case 'pending':
      return theme.palette.warning.main;
    case 'in-progress':
      return theme.palette.info.main;
    case 'completed':
      return theme.palette.success.main;
    default:
      return theme.palette.grey[300];
  }
};

const getPriorityColor = (priority: Task['priority']) => {
  switch (priority) {
    case 'low':
      return theme.palette.grey[theme.palette.mode === 'light' ? 600 : 400];
    case 'medium':
      return theme.palette.text.primary;
    case 'high':
      return theme.palette.error.main;
    default:
      return theme.palette.text.secondary;
  }
};
  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        backgroundColor: getStatusColor(task.status),
        padding: "20px",
        border: "2px solid white",
        borderRadius: "5px",
      }}
    >
      <Box sx={{ width: "50%" }}>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
        <Box display="flex" gap={2} mt={1}>
          <Typography sx={{ color: getPriorityColor(task.priority) }}>
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
          startIcon={<DeleteIcon  />}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default TaskItem;
