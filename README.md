# Task Manager

This project is a simple Task Management application built with **React** **TypeScript** and **MUI**. It demonstrates key React fundamentals including:

- List rendering with unique keys
- Conditional rendering
- Component composition
- Type safety with TypeScript
- User-driven state updates via props and callbacks

---

## Lab Objectives

Completed:

Rendered lists with proper `key` management  
Filtered tasks by `status` and `priority`  
Used conditional rendering based on task properties  
Applied TypeScript interfaces for safe props and state  
Composed reusable and interactive components

---

## Setup Instructions

### 1. Clone and install dependencies

```bash
git clone https://github.com/Per-Scholas-Hassan-Razak/task-manager-mod9.git
cd task-manager-mod9
npm install
npm run dev
```

## Component Responsibility
 1. TaskList Component
      - Display a list of tasks
      - handle status change and task deletion 
  
 2. TaskItem Component
      -  renders a single task item
  
 3. TaskFilter Component 
      - Provides dropdowns to filter tasks by status and priority
  
## Reflection Questions
	•	How did you ensure unique keys for your list items?
    Unique keys reside at the outer most element when rendering a list. 
    Based on that requirement with the use of the .map I chose the outer most element
    which in this case was the React fragment. 

	•	What considerations did you make for filtering logic?
    I wanted to make sure that both filtered options were taken into consideration when rendering 
    the filtered task list. For that reason I have one check that matchs any task with a status and 
    another check that checks for priority. With these in mind the resultant task must match both filter prior to being 
    added to the filtered array. 

	•	How did you handle task status updates?
    The handleStatusChange method uses state setter method to first use the prevState and map through 
    the list of taks. We perform a check to see if the taskId matches the id of the task we want to change
    if and when found using the spread operator we create a copy of the current task with matching id 
    and then update its status field with the new status provided from the taskitem component. In this was 
    we update state of the task list safely. 

	•	What was the most challenging part of implementing conditional rendering?
    I developed the coloring map for status and priority to style the tasks divs based on those properties. 
    just coming up with that was not straightforward. 
   
## References 
 - MUI
   - [MUI Documentation](https://mui.com/material-ui/react-image-list/)