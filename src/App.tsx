import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "./features/Dashboard";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskIcon from "@mui/icons-material/Checklist";
import SettingsIcon from "@mui/icons-material/Settings";
import type { NavigationItem } from "@toolpad/core";
import { lightTheme, darkTheme } from "./theme/theme";

const navigation: NavigationItem[] = [
  {
    kind: "page",
    icon: <DashboardIcon />,
    title: "Overview",
    segment: "overview",
  },
  {
    kind: "page",
    icon: <TaskIcon />,
    title: "Tasks",
    segment: "tasks",
  },
  {
    kind: "divider",
  },
  {
    kind: "page",
    icon: <SettingsIcon />,
    title: "Settings",
    segment: "settings",
  },
];

function App() {
  return (
    <>
      <CssBaseline />
      <AppProvider
        theme={{ light: lightTheme, dark: darkTheme }}
        branding={{
          title: "Task Manager",
          logo: <TaskIcon fontSize="large" sx={{ color: 'primary.main' }}/>,
          homeUrl: "/",
        }}
        navigation={navigation}
      >
        <DashboardLayout>
          <Dashboard />
        </DashboardLayout>
      </AppProvider>
    </>
  );
}

export default App;
