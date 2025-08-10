import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

export default function Main() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ display: "flex", padding: "20px", gap: "20px" }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <MainLeft />
      <MainRight />
    </div>
  );
}
