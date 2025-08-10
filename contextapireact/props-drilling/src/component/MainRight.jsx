import React from "react";
import BottomMainRight from "./BottomMainRight";

export default function MainRight({ name }) {
  return (
    <div style={{ flex: 1, padding: "10px", background: "#ddd" }}>
      <h3>Main Right</h3>
    
      <BottomMainRight name={name} />
    </div>
  );
}
