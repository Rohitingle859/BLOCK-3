import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function Main() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <main style={{ marginTop: "20px" }}>
      <h2>{isLoggedIn ? "You are logged in!" : "You are logged out."}</h2>
    </main>
  );
}
