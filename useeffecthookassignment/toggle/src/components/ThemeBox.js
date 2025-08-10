import React from "react";

function ThemeBox({theme,text}){
    const styles = {
        light: {
            backgroundColor: "#f0f0f0",
        color: "#000",
        padding: "20px",
        borderRadius: "10px",
        width: "100px",
        textAlign: "center",
        },
        dark:{
            backgroundColor: "#333",
        color: "#fff",
        padding: "20px",
        borderRadius: "10px",
        width: "100px",
        textAlign: "center",
        }
    }

      return <div style={theme === "light" ? styles.light : styles.dark}>{text}</div>;
}

export default ThemeBox;