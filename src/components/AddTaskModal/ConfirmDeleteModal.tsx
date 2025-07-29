import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import type { Task } from "../../types";

interface ConfirmDeleteModalProps {
  task: Task | null;
  open: boolean;
  onClose: () => void;
  onConfirm: (taskId:string) => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  open,
  onClose,
  onConfirm,
  task,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        <DialogContentText>{task?.title}</DialogContentText>
        <DialogContentText>{task?.description}</DialogContentText>
      </DialogContent>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this task? This action cannot be
          undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={() => task && onConfirm(task?.id)} color="error" variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteModal;
