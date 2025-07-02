import React, { forwardRef } from "react";

const DesignBlocks = forwardRef((props, ref) => {
  console.log("Rendering DesignBlocks section");
  return (
    <div ref={ref}>
      {/* Existing DesignBlocks component code */}
      ...existing code...
    </div>
  );
});

export default DesignBlocks;