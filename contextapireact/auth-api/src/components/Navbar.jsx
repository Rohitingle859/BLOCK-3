import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function Navbar() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);

  return (
    <nav style={{ background: "#ddd", padding: "10px" }}>
      <button onClick={toggleAuth}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </nav>
  );
}
