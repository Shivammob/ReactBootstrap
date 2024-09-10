import React from "react";
import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  //   console.log(position, "xy")

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [position]);

  return (
    <div className="cursor">
      <div
        className="custom-cursor__cursor"
        style={{
          transform: `translate3d(calc(${position.x}px - 50%), calc(${position.y}px - 50%), 0`,
        }}
      ></div>
      <div
        className="custom-cursor__cursor-two"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
    </div>
  );
}

export default Cursor;
