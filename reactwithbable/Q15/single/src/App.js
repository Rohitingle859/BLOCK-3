
//import React from 'react';
import React, { useState } from 'react';

function App() {
  const[page,setPage] = useState('Home')

  const renderContent = () => {
    if (page === "Home") {
      return <h2>🏠 Welcome To Home</h2>;
    } else if (page === "About") {
      return <h2>About Us</h2>;
    } else if (page === "Contact") {
      return <h2>Contact Us</h2>;
    }
  
  }
  const navStyle = {
    display: "flex",
    gap: "20px",
    background: "#333",
    padding: "10px",
    color: "white",
    cursor: "pointer"
  };


  return (
   <div>
      <div style={navStyle}>
        <span onClick={() => setPage("Home")}>Home</span>
        <span onClick={() => setPage("About")}>About</span>
        <span onClick={() => setPage("Contact")}>Contact</span>
      </div>
      <div style={{ padding: "20px" }}>{renderContent()}</div>
    </div>
    
  );
}

export default App;
