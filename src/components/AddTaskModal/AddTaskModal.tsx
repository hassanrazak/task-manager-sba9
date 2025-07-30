import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

import { useEffect, useState } from "react";
import type { AddTaskModalProps, Task, TaskStatus } from "../../types";

const AddTaskModal: React.FC<AddTaskModalProps> = ({
  open,
  onClose,
  onAdd,
  nextId,
  taskToEdit,
  onUpdate,
}) => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "medium",
    dueDate: new Date().toISOString().split("T")[0],
  });

  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const resetForm = () => {
    if (taskToEdit) {
      setNewTask(taskToEdit);
    } else {
      setNewTask({
        title: "",
        description: "",
        status: "pending",
        priority: "medium",
        dueDate: new Date().toISOString().split("T")[0],
      });
    }
    setTitleError("");
    setDescriptionError("");
  };

  useEffect(() => {
    if (open) resetForm();
  }, [open, taskToEdit]);

  const handleSubmit = () => {
    const titleIsValid = newTask.title.trim() !== "";
    const descriptionIsValid = newTask.description.trim() !== "";

    if (!titleIsValid || !descriptionIsValid) {
      if (!titleIsValid) setTitleError("Title is required!");
      if (!descriptionIsValid) setDescriptionError("Due date is required!");
      return;
    }
    if (taskToEdit && onUpdate) {
      onUpdate(newTask as Task);
    } else {
      onAdd({ id: nextId, ...newTask } as Task);
    }
    setNewTask({
      title: "",
      description: "",
      status: "pending",
      priority: "medium",
      dueDate: "",
    });
    setTitleError("");
    setDescriptionError("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        {taskToEdit && onUpdate ? "Update Task" : "Add New Task"}
      </DialogTitle>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
      >
        <TextField
          label="Title"
          fullWidth
          value={newTask.title}
          onChange={(e) => {
            const value = e.target.value;
            setNewTask({ ...newTask, title: value });
            setTitleError(value.trim() ? "" : "Title is required!");
          }}
          error={!!titleError}
          helperText={titleError}
        />
        <TextField
          label="Description"
          multiline
          rows={3}
          fullWidth
          value={newTask.description}
          onChange={(e) => {
            const value = e.target.value;
            setNewTask({ ...newTask, description: value });
            setDescriptionError(value.trim() ? "" : "Description is required");
          }}
          error={!!descriptionError}
          helperText={descriptionError}
        />
        <TextField
          label="Due Date"
          type="date"
          fullWidth
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
        />
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            label="Status"
            value={newTask.status}
            onChange={(e) =>
              setNewTask({ ...newTask, status: e.target.value as TaskStatus })
            }
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="in-progress">In-Progress</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Priority</InputLabel>
          <Select
            label="Priority"
            value={newTask.priority}
            onChange={(e) =>
              setNewTask({
                ...newTask,
                priority: e.target.value as "low" | "medium" | "high",
              })
            }
          >
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
        >
          {taskToEdit && onUpdate ? "Update Task" : "Add Task"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTaskModal;
