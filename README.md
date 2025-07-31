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

### 1. Dashbaord Component ([Dashboard.tsx](src/features/Dashboard.tsx))
**Compose all components into a cohesive dashboard**

- Implement responsive layout ✅
- Handle component communication ✅
- Implement task addition ✅
- Data Persistence ✅
- Add localStorage integration ✅
  
### 2. Task List Component([TaskList.tsx](src/components/TaskList/TaskList.tsx))
**Implement list rendering with proper key management**

- Creates a table to host all tasks ✅
- Iterates through the task array ✅
- generates a table row for each task ✅
- Add sorting functions to each header column  ✅

### 3. Task Item Component([TaskItem.tsx](src/components/TaskList/TaskItem.tsx))
**Implement list rendering with proper key management**

- Handle task status updates via select dropdown ✅
- Implement task `DELETION` (trash icon) ✅
- Implement task `EDIT` (pencil icon) ✅


### Add/Edit Task Modal Component:
**Create a controlled form for adding/editing tasks**

- Implement form validation ✅
- Handle form submission ✅
- Show validation feedback ✅
- Handle New task addition ✅
- Handle update task ✅

### Task Filter Component ([TaskFilter.tsx](src/components/TaskFilter/TaskFilter.tsx))
**Implement filtering by status and priority**
- filter tasks by `status | priority`  ✅
- Implement task filtering logic ✅

### Task Search Component ([TaskSearchBar.tsx](src/components/TaskFilter/TaskSearchBar.tsx))
**Implement filtering by status and priority**

- Add a search bar to search for tasks ✅
- Keeps local stat  ✅
- filter tasks by `search term`  ✅


 
  

## References

- [Material UI Documentation](https://mui.com/)
- [React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)
- [Vite + React + TS Setup](https://vitejs.dev/guide/)
- [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [React MUI Table Example](https://mui.com/material-ui/react-table/)
- [Custom Theme in MUI](https://mui.com/material-ui/customization/theming/)