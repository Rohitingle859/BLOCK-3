import React from "react";

function UserCard({ name, email, city }) {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>City: {city}</p>
    </div>
  );
}

const styles = {
  card: {
    background: "#f9f9f9",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    width: "250px",
    textAlign: "left",
  },
};

export default UserCard;
