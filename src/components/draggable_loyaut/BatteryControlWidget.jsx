import { Box, Button, Typography } from "@mui/material";

const BatteryControlWidget = () => {
  return (
    <Box className="widget-content">
      <Typography>Battery Controls</Typography>
      <Button variant="contained">Add</Button>
      <Button variant="outlined">Add</Button>
    </Box>
  );
};

export default BatteryControlWidget;
