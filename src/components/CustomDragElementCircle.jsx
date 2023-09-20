import { useDragger } from "../hooks/useDragger.jsx";
import { useEffect, useState } from "react";

const CustomDragElementCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 120, height: 120 });

  // Function to handle dragging and update the position and size
  const handleDrag = (x, y) => {
    setPosition({ x, y });
  };

  // Use the useDragger hook to enable dragging
  useDragger("circle", handleDrag);

  // Update the size when needed (e.g., if the size changes)
  // Replace this with your own logic if the size can change dynamically
  const updateSize = () => {
    const circle = document.getElementById("circle");
    if (circle) {
      const rect = circle.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    }
  };

  // Update the size initially and whenever the component re-renders
  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <>
      <div
        id="circle"
        className="circle"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
      <div
        className="lines"
        style={{
          left: `${position.x + size.width / 2}px`,
          top: `${position.y + size.height / 2}px`,
          width: "100%",
          height: "100%",
        }}
      ></div>
    </>
  );
};

export default CustomDragElementCircle;
