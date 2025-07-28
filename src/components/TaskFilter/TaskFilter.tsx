import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { TaskFilterProps, TaskStatus } from "../../types";
import { useState } from "react";

const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
  const [status, setStatus] = useState<TaskStatus | undefined>(undefined);
  const [priority, setPriority] = useState<
    "low" | "medium" | "high" | undefined
  >(undefined);

  const handleStatusChange = (updateStatus: TaskStatus | "") => {
    const selectedStatus = updateStatus === "" ? undefined : updateStatus;
    setStatus(selectedStatus);
    onFilterChange({ status: selectedStatus, priority });
  };

  const handlePriorityChange = (
    updatedPriority: "low" | "medium" | "high" | ""
  ) => {
      const selectedPriority = updatedPriority === "" ? undefined : updatedPriority;
      setPriority(selectedPriority);
    onFilterChange({ status, priority: selectedPriority });
  };

  return (
 <Box sx={{ display: "flex", gap: 2 }}>
  <FormControl size="small" fullWidth sx={{ maxWidth: 200 }}>
    <InputLabel>Filter Status</InputLabel>
    <Select
      value={status ?? "All"}
      label="Filter Status"
      onChange={(e) => handleStatusChange(e.target.value as TaskStatus | "")}
    >
      <MenuItem value="">All</MenuItem>
      <MenuItem value="pending">Pending</MenuItem>
      <MenuItem value="in-progress">In Progress</MenuItem>
      <MenuItem value="completed">Completed</MenuItem>
    </Select>
  </FormControl>

  <FormControl size="small" fullWidth sx={{ maxWidth: 200 }}>
    <InputLabel>Filter Priority</InputLabel>
    <Select
      value={priority ?? ""}
      label="Filter Priority"
      onChange={(e) =>
        handlePriorityChange(e.target.value as "low" | "medium" | "high" | "")
      }
    >
      <MenuItem value="">All</MenuItem>
      <MenuItem value="low">Low</MenuItem>
      <MenuItem value="medium">Medium</MenuItem>
      <MenuItem value="high">High</MenuItem>
    </Select>
  </FormControl>
</Box>
  );
};

export default TaskFilter;
