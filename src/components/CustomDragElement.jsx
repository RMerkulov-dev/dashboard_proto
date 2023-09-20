import { useDragger } from "../hooks/useDragger.jsx";

const CustomDragElement = () => {
  useDragger("drag-box");

  return (
    <div className="box" id="drag-box">
      Drag me
    </div>
  );
};

export default CustomDragElement;
