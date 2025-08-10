import React from "react";

export default function BottomMainRight({ name }) {
  return (
    <div style={{ marginTop: "20px", padding: "10px", background: "#ccc" }}>
      <h4>Bottom Main Right</h4>
      <p>User's Name: <strong>{name || "No name entered yet"}</strong></p>
    </div>
  );
}
