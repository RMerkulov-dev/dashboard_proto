import { Box, Button, Typography } from "@mui/material";

const EmsStatusWidget = () => {
  return (
    <Box className="widget-content">
      <Typography>EmsStatus</Typography>
      <Button variant="contained">Add</Button>
      <Button variant="outlined">Add</Button>
    </Box>
  );
};

export default EmsStatusWidget;
