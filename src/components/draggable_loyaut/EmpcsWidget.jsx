import { Box, Button, Typography } from "@mui/material";

const EmpcWidget = () => {
  return (
    <Box className="widget-content">
      <Typography>Empcs</Typography>
      <Button variant="contained">Add</Button>
      <Button variant="outlined">Add</Button>
    </Box>
  );
};

export default EmpcWidget;
