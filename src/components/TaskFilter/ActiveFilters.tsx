import { Box, Chip, Typography } from "@mui/material";
import type { ActiveFiltersProps } from "../../types";

const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  status,
  priority,
  sortBy,
  sortOrder,
}) => {
  return (
    <Box display="flex" alignItems="center" gap={1} flexWrap="wrap" mt={1}>
      <Typography fontWeight="bold">Active Filters:</Typography>
      {status && <Chip label={`Status: ${status}`} color="info" />}
      {priority && <Chip label={`Priority: ${priority}`} color="warning" />}
      {sortBy && (
        <Chip label={`Sorted by: ${sortBy} (${sortOrder})`} color="secondary" />
      )}
      {!status && !priority && !sortBy && (
        <Typography variant="body2" color="textSecondary">
          No Filters Selected
        </Typography>
      )}
    </Box>
  );
};

export default ActiveFilters;
