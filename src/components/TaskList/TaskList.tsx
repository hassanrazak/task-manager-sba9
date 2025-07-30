import type { Task, TaskListProps } from "../../types";
import List from "@mui/material/List";
import {
  Divider,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import TaskItem from "./TaskItem";
import React from "react";

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onStatusChange,
  onDelete,
  handleEditTask
}) => {
  return (
    <Table>
      <TableHead
        sx={{
          "& th": {
            fontWeight: "bold",
            fontSize: "1rem",
            color: "text.primary",
            borderBottom: "2px solid",
            border: "1px solid",
            borderColor: "divider",
          },
        }}
      >
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Priority</TableCell>
          <TableCell>Due Date</TableCell>
          <TableCell>Set Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody
        sx={{
          "& td": {
            border: "1px solid",
            borderColor: "divider",
          },
        }}
      >
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
            onDelete={() => task && onDelete(task)}
            handleEditTask={handleEditTask}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default TaskList;
