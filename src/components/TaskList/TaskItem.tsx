import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TableCell,
  TableRow,
  Tooltip,
} from "@mui/material";
import type { Task, TaskItemProps, TaskStatus } from "../../types";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onStatusChange,
  onDelete,
handleEditTask
}) => {
  const theme = useTheme();

  const getStatusColor = (status: TaskStatus) => {
    switch (status) {
      case "pending":
        return theme.palette.warning.main;
      case "in-progress":
        return theme.palette.info.main;
      case "completed":
        return theme.palette.success.main;
      default:
        return theme.palette.grey[300];
    }
  };

  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "low":
        return theme.palette.grey[theme.palette.mode === "light" ? 600 : 400];
      case "medium":
        return theme.palette.text.primary;
      case "high":
        return theme.palette.error.main;
      default:
        return theme.palette.text.secondary;
    }
  };
  {
  }
  return (
    <TableRow
      sx={{
        borderLeft: `3px solid ${getStatusColor(task.status)}`,
        backgroundColor: "background.paper", 
        "&:not(:last-child)": {
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        },
        "&:hover": {
          backgroundColor: (theme) => theme.palette.action.hover, 
        },
      }}
    >
      <TableCell>{task.title}</TableCell>
      <TableCell>{task.description}</TableCell>
      <TableCell sx={{ color: getPriorityColor(task.priority) }}>
        {task.priority}
      </TableCell>
      <TableCell>{new Date(task.dueDate).toLocaleDateString()}</TableCell>
      <TableCell>
        <Box sx={{ display: "flex", flexDirection: "column" }} gap={3}>
          <FormControl size="small" sx={{ minWidth: 120 }}>
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
          {/* <Chip
          label={task.status.replace("-", " ")}
          color={
            task.status === "pending"
              ? "warning"
              : task.status === "in-progress"
                ? "info"
                : "success"
          }
          size="small"
          sx={{
    width: "40px",           
    justifyContent: 'center',
  }}
         
        />  */}
        </Box>
      </TableCell>

      <TableCell align="right">
        <Box display="flex" justifyContent="center" gap={5}>
          <Tooltip title="Edit" arrow>
            <EditIcon
              sx={{
                color: "primary.main",
                fontSize: 20,
                cursor: "pointer",
                "&:hover": {
                  color: "primary.dark",
                  transform: "scale(1.2)",
                },
                transition: "transform 0.2s ease-in-out",
              }}
              onClick={() => handleEditTask(task)}
            />
          </Tooltip>
          <Tooltip title="Delete" placement="top" arrow>
            <DeleteIcon
              sx={{
                color: "error.main",
                fontSize: 20,
                cursor: "pointer",
                "&:hover": {
                  color: "error.dark",
                  transform: "scale(1.2)",
                },
                transition: "transform 0.2s ease-in-out",
              }}
              onClick={() => task && onDelete(task)}
            />
          </Tooltip>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default TaskItem;
