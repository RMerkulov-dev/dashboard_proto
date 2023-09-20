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
import ControlsWidget from "./ControlsWidget.jsx";
import EmsStatusWidget from "./EmsStatusWidget.jsx";
import EmpcWidget from "./EmpcsWidget.jsx";
import BatteryControlWidget from "./BatteryControlWidget.jsx";

const ResponsiveGridLayout = WidthProvider(Responsive);

const widgetNames = {
  a: {
    i: ControlsWidget,
    name: "Controls",
  },
  b: {
    i: EmsStatusWidget,
    name: "Ems Status",
  },
  c: {
    i: EmpcWidget,
    name: "Empcs",
  },
  d: {
    i: BatteryControlWidget,
    name: "Battery control",
  },
};
const originalItems = ["a", "b", "c", "d"];

const DashboardLayout = () => {
  const [layout, setLayout] = useState([]);
  const [items, setItems] = useState(originalItems);

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
                label={widgetNames[i].name}
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
          {items.map((key) => {
            const WidgetComponent = widgetNames[key].i;
            return (
              <Box key={key}>
                <WidgetComponent />
              </Box>
            );
          })}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default DashboardLayout;
