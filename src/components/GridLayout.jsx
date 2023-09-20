import GridLayout from "react-grid-layout";

const GridLayoutComponent = () => {
  const layout = [
    { i: "box", x: 0, y: 0, w: 4, h: 4, static: false },
    { i: "box_1", x: 0, y: 0, w: 4, h: 4, static: false },
  ]; // Set static to false to make it resizable

  const onResize = (layout, oldItem, newItem) => {
    // Handle resize logic here if needed
    console.log("Resized:", oldItem, newItem);
  };

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
      onResize={onResize}
      draggableHandle=".drag-handle"
    >
      <div
        key="box"
        className="box"
        style={{ backgroundColor: "#3498db", borderColor: "#2980b9" }}
      >
        <div className="drag-handle" style={{ backgroundColor: "#2ecc71" }}>
          Drag me
        </div>
        <div
          className="content"
          style={{ padding: "10px", textAlign: "center" }}
        >
          Resizable Box
        </div>
      </div>
      <div
        key="box_1"
        className="box_1"
        style={{ backgroundColor: "#3498db", borderColor: "#2980b9" }}
      >
        <div className="drag-handle" style={{ backgroundColor: "#2ecc71" }}>
          Drag me
        </div>
        <div
          className="content"
          style={{ padding: "10px", textAlign: "center" }}
        >
          Resizable Box
        </div>
      </div>
    </GridLayout>
  );
};

export default GridLayoutComponent;
