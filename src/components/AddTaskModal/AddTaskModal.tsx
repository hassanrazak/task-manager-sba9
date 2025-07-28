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
} from '@mui/material';

import { useState } from 'react';
import type { Task, TaskStatus } from '../../types';

interface AddTaskModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (task: Task) => void;
  nextId: string;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ open, onClose, onAdd, nextId }) => {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    status: 'pending',
    priority: 'medium',
    dueDate: '',
  });

  const handleSubmit = () => {
    onAdd({ id: nextId, ...newTask } as Task);
    setNewTask({
      title: '',
      description: '',
      status: 'pending',
      priority: 'medium',
      dueDate: '',
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}
      >
        <TextField
          label="Title"
          fullWidth
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <TextField
          label="Description"
          multiline
          rows={3}
          fullWidth
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
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
              setNewTask({ ...newTask, priority: e.target.value as "low" | "medium" | "high"})
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
          disabled={!newTask.title || !newTask.dueDate}
        >
          Add Task
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTaskModal;