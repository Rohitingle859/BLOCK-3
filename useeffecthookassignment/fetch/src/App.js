
import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCards.js";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError("Unable to load user data. Please try again later.");
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);


  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1>User Profiles</h1>

     
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

   
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

     
      <div style={styles.userList}>
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "20px", fontFamily: "Arial" },
  search: {
    padding: "8px",
    width: "200px",
    margin: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  userList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "20px",
  },
};

export default App;

