import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function BottomMainRight() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        backgroundColor: theme === "light" ? "#ffffff" : "#444",
        color: theme === "light" ? "#000" : "#fff"
      }}
    >
      <h3>Bottom Main Right</h3>
      <p>Current Theme: {theme}</p>
    </div>
  );
}
