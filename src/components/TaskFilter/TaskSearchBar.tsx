import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const TaskSearchBar = () => {
  return (
    <TextField
      fullWidth
      sx={{ flexGrow: 1 }}
      type="search"
      label="Search Tasks"
      variant="outlined"
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default TaskSearchBar;
