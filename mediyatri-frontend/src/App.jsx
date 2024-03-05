import React, { useState, useEffect } from "react";
import axios from "axios";
import Routes from "./Routes";

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   axios.get("http://localhost:5000/message")
  //     .then((response) => {
  //       setMessage(response.data.message);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching message:", error);
  //     });
  // }, []);

  return (
    <React.StrictMode>
      {/* <h1>{message}</h1> */}
      <Routes />
    </React.StrictMode>
  );
}

export default App;
