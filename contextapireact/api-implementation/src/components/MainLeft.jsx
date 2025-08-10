import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function MainLeft() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        flex: 1,
        padding: "20px",
        backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "#000" : "#fff"
      }}
    >
      <h2>Main Left</h2>
    </div>
  );
}
