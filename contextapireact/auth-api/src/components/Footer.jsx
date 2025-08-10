import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function Footer() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <footer style={{ marginTop: "20px", background: "#eee", padding: "10px" }}>
      <p>{isLoggedIn ? "Welcome, User" : "Please log in"}</p>
    </footer>
  );
}
