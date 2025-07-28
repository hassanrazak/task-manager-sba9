import type { Task, TaskListProps } from "../../types";
import List from "@mui/material/List";
import { Divider, ListItem } from "@mui/material";
import TaskItem from "./TaskItem";
import React from "react";

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onStatusChange,
  onDelete,
}) => {
  return (
    <List>
      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          <ListItem>
            <TaskItem
              task={task}
              onStatusChange={onStatusChange}
              onDelete={onDelete}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default TaskList;
