import { Box, Button, Typography } from "@mui/material";

const ControlsWidget = () => {
  return (
    <Box className="widget-content">
      <Typography>Controls</Typography>
      <Button variant="contained">Add</Button>
      <Button variant="outlined">Add</Button>
    </Box>
  );
};

export default ControlsWidget;
