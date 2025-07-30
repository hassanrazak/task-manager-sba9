import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import type { ConfirmDeleteModalProps } from "../../types";

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  open,
  onClose,
  onConfirm,
  task,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          maxWidth: "750px",
          borderRadius: 3,
          boxShadow: 24,
        },
      }}
      BackdropProps={{
        sx: {
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        },
      }}
    >
      <DialogTitle>
        <Typography
          variant="h5"
          align="center"
          fontWeight={700}
          textTransform={"uppercase"}
          sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
        >
          ⚠️ Caution !
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box mb={2}>
          <Typography variant="h6" textAlign="center" fontWeight={500}>
            Task: {task?.title}
          </Typography>
        </Box>
        <DialogContentText>
          <Typography
            variant="subtitle2"
            align="center"
            fontWeight={600}
            textTransform={"uppercase"}
          >
         Are you sure you want to delete this task?
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="outlined">
          Cancel
        </Button>
        <Button
          onClick={() => task && onConfirm(task?.id)}
          color="error"
          variant="contained"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteModal;
