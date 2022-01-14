import "./App.css";
import { useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000/");

function App() {
  useEffect(() => {
    socket.on("connection", () => {
      console.log(`I'm connected with the back-end`);
    });
    socket.on("new", () => {
      console.log("client event new triggered");
    });
  }, []);

  return <div className="App"></div>;
}

export default App;
