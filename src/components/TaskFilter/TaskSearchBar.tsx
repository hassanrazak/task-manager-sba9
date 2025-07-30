import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import type { TaskSearchBarProps } from "../../types";



const TaskSearchBar: React.FC<TaskSearchBarProps> = ({ onSearch }) => {
  return (
    <TextField
      fullWidth
      sx={{
        flexGrow: 1,
        backgroundColor: "background.paper",
        borderRadius: 2,
        boxShadow: 2,
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "primary.main",
          },
          "&:hover fieldset": {
            borderColor: "primary.dark",
          },
          "&.Mui-focused fieldset": {
            borderColor: "primary.dark",
            borderWidth: 2,
          },
        },
      }}
      name="searchTerm"
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
      onChange={onSearch}
    />
  );
};

export default TaskSearchBar;
