import React, { useState, useEffect } from "react";

function Hookmouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logmouseposition = e => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect Called..");
    window.addEventListener("mousemove", logmouseposition);
    return () => {
      console.log("Component unmounting code...");
      window.removeEventListener("mousemove", logmouseposition);
    };
  }, []);
  //This useEffect called only once in its intial render using an empty array as second parameter
  // Component clean up code will be wriiten in the return method of useEffect
  return (
    <div>
      X-{x} Y-{y}
    </div>
  );
}

export default Hookmouse;
