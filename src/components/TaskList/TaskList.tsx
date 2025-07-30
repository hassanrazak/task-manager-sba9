import type { TaskListProps } from "../../types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import TaskItem from "./TaskItem";
import React from "react";

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onStatusChange,
  onDelete,
  handleEditTask,
  sortBy,
  sortOrder,
  handleSort,
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
          <TableCell>
            <TableSortLabel
              active={sortBy === "title"}
              direction={sortBy === "title" ? sortOrder : "asc"}
              onClick={() => handleSort("title")}
              hideSortIcon={false}
              >
              Title
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={sortBy === "description"}
              direction={sortBy === "description" ? sortOrder : "asc"}
              onClick={() => handleSort("description")}
              hideSortIcon={false}
            >
              Description
            </TableSortLabel>
          </TableCell>
          <TableCell sortDirection={sortBy === "priority" ? sortOrder : false}>
            <TableSortLabel
              active={sortBy === "priority"}
              direction={sortBy === "priority" ? sortOrder : "asc"}
              onClick={() => handleSort("priority")}
            >
              Priority
            </TableSortLabel>
          </TableCell>
          <TableCell sortDirection={sortBy === "dueDate" ? sortOrder : false}>
            <TableSortLabel
              active={sortBy === "dueDate"}
              direction={sortBy === "dueDate" ? sortOrder : "asc"}
              onClick={() => handleSort("dueDate")}
            >
              Due Date
            </TableSortLabel>
          </TableCell>
          <TableCell sortDirection={sortBy === "status" ? sortOrder : false}>
            <TableSortLabel
              active={sortBy === "status"}
              direction={sortBy === "status" ? sortOrder : "asc"}
              onClick={() => handleSort("status")}
            >
              Status
            </TableSortLabel>
          </TableCell>
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
            task={task}
            key={task.id}
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
