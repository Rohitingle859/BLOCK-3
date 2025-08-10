import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Main from "./components/Main";

export default function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}
