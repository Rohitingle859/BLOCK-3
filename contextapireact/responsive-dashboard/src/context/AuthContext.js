import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  function toggleLogin() {
    setLoggedIn(prev => !prev);
  }

  return (
    <AuthContext.Provider value={{ loggedIn, toggleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
