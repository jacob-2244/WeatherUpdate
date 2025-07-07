



import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
     
         Developed by{" "}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Muhammad Yaqoob
        </a>{" "}
        | Powered by{" "}
        <a
          href="https://www.htmlhints.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          HTML HINTS
        </a>
      </div>
    </>
  );
}

export default App;

