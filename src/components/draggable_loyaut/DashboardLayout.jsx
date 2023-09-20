import { Responsive, WidthProvider } from "react-grid-layout";
import { useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";

const ResponsiveGridLayout = WidthProvider(Responsive);

const widgetNames = {
  a: "Gauge",
  b: "Progress Bar",
};
const originalItems = ["a", "b"];

const DashboardLayout = () => {
  const [layout, setLayout] = useState([]);
  const [items, setItems] = useState(originalItems);

  // const layout = [
  //   { i: "a", x: 0, y: 0, w: 1, h: 2 },
  //   { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  //   // { i: "c", x: 4, y: 0, w: 1, h: 2 },
  //   // { i: "d", x: 0, y: 2, w: 2, h: 2, isDraggable: false },
  // ];

  const onLayoutChange = (_, allLayouts) => {
    setLayout(allLayouts);
  };

  const onRemoveItem = (itemId) => {
    setItems(items.filter((i) => i !== itemId));
  };
  const onAddItem = (itemId) => {
    setItems([...items, itemId]);
  };

  const handleChange = (e) => {
    if (e.target.checked) {
      onAddItem(e.target.name);
    } else {
      onRemoveItem(e.target.name);
    }
  };

  return (
    <div className="dashboard-wrapper">
      <div className="side-menu">
        <FormControl component="fieldset">
          <FormLabel component="legend">Select Widgets</FormLabel>
          <FormGroup>
            {originalItems.map((i) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={items.includes(i)}
                    onChange={handleChange}
                    name={i}
                  />
                }
                label={widgetNames[i]}
                key={i}
              />
            ))}
          </FormGroup>
        </FormControl>
      </div>
      <div className="dashboard-layout">
        <ResponsiveGridLayout
          className="layout"
          layout={layout}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={60}
          onLayoutChange={onLayoutChange}
        >
          {items.map((key) => (
            <Box key={key}>
              <Box id={key} onRemoveItem={onRemoveItem} className="widget">
                1
              </Box>
            </Box>
          ))}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default DashboardLayout;
