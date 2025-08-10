import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuth = () => {
    setIsLoggedIn(prev => !prev);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

