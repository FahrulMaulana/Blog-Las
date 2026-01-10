import React, { forwardRef } from "react";

const Information = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      {/* Existing Information component code */}
      console.log("Rendering Information section"); ...existing code...
    </div>
  );
});

export default Information;
