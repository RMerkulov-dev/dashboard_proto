import { useEffect, useRef, useState } from "react";

export const useResizable = () => {
  const resizableRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [initialWidth, setInitialWidth] = useState(0);

  useEffect(() => {
    function handleMouseDown(event) {
      if (resizableRef.current.contains(event.target)) {
        setIsResizing(true);
        setInitialWidth(resizableRef.current.clientWidth);
      }
    }

    function handleMouseMove(event) {
      if (isResizing) {
        const newWidth =
          initialWidth +
          event.clientX -
          resizableRef.current.getBoundingClientRect().left;
        resizableRef.current.style.width = `${newWidth}px`;
      }
    }

    function handleMouseUp() {
      setIsResizing(false);
    }

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing, initialWidth]);

  return resizableRef;
};
