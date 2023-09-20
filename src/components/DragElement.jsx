import Draggable from "react-draggable";
import { useState } from "react";

const DragElement = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e, ui) => {
    const { x, y } = ui;
    setPosition({ x, y });
  };

  const leftLineX = 0; // X-coordinate for the left line
  const topLineY = position.y; // Y-coordinate for the top line (middle-top of the div)

  return (
    <>
      <Draggable onDrag={handleDrag} enableUserSelectHack={true}>
        <div className="container">Drag me</div>
      </Draggable>
      <div className="position-info">
        <p>X: {position.x}</p>
        <p>Y: {position.y}</p>
      </div>
      <div className="lines">
        <div className="vertical-line" style={{ left: leftLineX }}></div>
        <div className="horizontal-line" style={{ top: topLineY }}></div>
      </div>
    </>
  );
};

export default DragElement;
