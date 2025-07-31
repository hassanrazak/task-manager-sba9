# Task Management Dashboard

This project is a Task Management Dashboard application built with **React** **TypeScript** and **MUI**. It demonstrates key React fundamentals including:

---
## Setup Instructions

### 1. Clone and install dependencies and run

```bash
git clone https://github.com/hassanrazak/task-manager-sba9.git
```
```bash
cd task-manager-sba9
```

```bash
npm install
```
### 2. Run the application in local host
```bash
npm run dev
```

## Functionality

### 1. Dashbaord Component ([Dashboard.tsx](src/features/Dashboard.tsx)) ✅
**Compose all components into a cohesive dashboard**

- On intial load task array is pulled from local json file located in public folder via useEffect. 
- loaded tasks are saved to local storage and subsequent CRUD operations are done against local    storage.
- Use of two useEffects to fix bug where task list updates were causing state of taskList to be set to an empty array. In this way we ensure that if data has been loaded to localstorage to always pull from that. 
- tasks are saved to state at dashboard level and fed to tasklist compoenent for rendering
- handlers for `status-update`, `deletion` and `task-update` are passed as callbacks to tasklist -> taskitem.
- handler for sorting, filtering, editing, etc.. also are centralized at dashboard level and provided as props to child components.
- Implement responsive layout 

  
### 2. Task List Component([TaskList.tsx](src/components/TaskList/TaskList.tsx)) ✅
**Implement list rendering with proper key management**

- Creates a table to display all tasks 
- Add sorting function to each header column i.e `title | description | etc...`  
- Iterates through the task array 
- generates a table row  as a `TaskItem` component for each task 

### 3. Task Item Component([TaskItem.tsx](src/components/TaskList/TaskItem.tsx)) ✅
**Implement list rendering with proper key management**

- Fires of :
  - status updates via select dropdown 
  - task `DELETION` via (trash icon) 
  - task `EDIT` via (pencil icon) 


### 4. Add/Edit Task Modal Component ✅
**Create a controlled form for adding/editing tasks**

- Implement form validation
  - isValid
  - local error states for title and description
- Handle form submission 
  - prevent submission unless validation passes
  - clears errors on successful input 
- Show validation feedback 
  - red required text | border highlighted red
- Handle New task addition 
  - Clears fields with new task object at local state 
- Handle update task with prefilled fields 
  - prepopulates form field, task instance is passed from taskitem component 
    to dashboard where it is set as a state variable as `taskToEdit` and then passed to 
    modal to be used to prefill task object  

### 5. Task Filter Component ([TaskFilter.tsx](src/components/TaskFilter/TaskFilter.tsx)) ✅
**Implement filtering by status and priority**

- filter tasks by `status | priority` 
- uses form control
- callback passed from dahsboard
- status and priority values are passed to on filter change method to dashboard
- Dashboard updates filter state 
- filter state is used to filter taskList 
- filtered tasks are sent down to tasklist to be rendered

### 6. Task Search Component ([TaskSearchBar.tsx](src/components/TaskFilter/TaskSearchBar.tsx)) ✅
**Implement filtering by status and priority**

- Add a search bar to search for tasks 
- filter tasks by `search term`  
- search term passes up a string to handleSearch at dashboard
- handle search updates the searchTerm field of filter state
- filteredTasks are recalculated based on priority, status, and search term. 

### 7. Delete Task Modal Component ✅
**Confirm task deletion**

- Cautions user prior to task deletion 
- Deletes task onClick of DELETE button 
- Task is deleted from localstorage 
- Dashboard re-renders updated task list 


## Reflection
I was able to deeply interact with ==Typescript==, ==React==, and ==MUI== during this project. 
In order to extend what I had done in lab 9.3 I first wanted to see if I could get MUI's Dashboard
layout component working. After learning about the context that AppProvider provided as well the 
various props that it had I was able to have access to the in-built functionality of the dashboard 
with just a few lines of code. This helped give the application a professional look even though 
many of the dashboard features havent been implemented. But the theme toggling works like a charm 
between night and day mode and I am able to navigated between different pages even though they all 
show the same thing. In the future the plan is have an Overview component that shows metrics 
and the tasks component will only show the task manager. I made sure in the app to use Typescript through out so that all of my components knew what to expect for the shape of props which was a good
exercise. I used a top down state management approach, lifting data to the dashboard level and using handlers to create cross component communication. One of the main challenges I had was reusing the add task modal for delete and ensuring that errors were cleared so they didnt presist across sessions. By tracking the open and close state of the modal I was able to set the task for the form 
as either a new task or one thats to be editing. It was a fun problem to tackle. Overall the project helped me to reinforce a lot of my previous knowledge and helped me upskill into using modal from MUI which was new for me.

## References

- [Material UI Documentation](https://mui.com/)
- [React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)
- [Vite + React + TS Setup](https://vitejs.dev/guide/)
- [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [React MUI Table Example](https://mui.com/material-ui/react-table/)
- [Custom Theme in MUI](https://mui.com/material-ui/customization/theming/)