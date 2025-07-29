import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface TaskSearchBarProps{
    onSearch:(e:React.ChangeEvent<HTMLInputElement>) => void;
}

const TaskSearchBar:React.FC<TaskSearchBarProps> = ({onSearch}) => {
  return (
    <TextField
      fullWidth
      sx={{ flexGrow: 1 }}
      name='searchTerm'
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
