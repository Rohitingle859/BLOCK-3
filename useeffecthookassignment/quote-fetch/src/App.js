

import React, { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);

  
  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
    setLoading(false);
  };


  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h1>Daily Quote Viewer</h1>
      {loading ? (
        <p style={{ fontStyle: "italic" }}>Loading...</p>
      ) : (
        <div style={styles.quoteBox}>
          <p style={styles.quote}>"{quote.content}"</p>
          <p style={styles.author}>- {quote.author}</p>
        </div>
      )}
      <button style={styles.button} onClick={fetchQuote}>
        Get New Quote
      </button>
    </div>
  );
}


const styles = {
  container: { textAlign: "center", padding: "20px", fontFamily: "Arial" },
  quoteBox: {
    background: "#f4f4f4",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "500px",
    margin: "20px auto",
  },
  quote: { fontSize: "20px" },
  author: { fontSize: "16px", color: "gray", marginTop: "10px" },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    marginTop: "10px",
    cursor: "pointer",
  },
};

export default App;
