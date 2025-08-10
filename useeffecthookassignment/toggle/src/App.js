import React,{useState,useEffect} from "react";
import ThemeBox from "./components/ThemeBox";

function App() {
  const [theme,setTheme] =useState(()=>{
    return localStorage.getItem("theme") || "light";
  })
  useEffect(()=>{
    localStorage.setItem("theme",theme)
  }, [theme]);

  const toggleTheme=()=>{
    setTheme(theme === "light" ? "dark": "light")
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Theme Toggle App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", gap: "10px" }}>
        <ThemeBox theme={theme} text="Box 1" />
        <ThemeBox theme={theme} text="Box 2" />
        <ThemeBox theme={theme} text="Box 3" />
      </div>
    </div>
  )
} 

export default App;
