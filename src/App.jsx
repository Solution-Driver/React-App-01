import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello from "./components/Hello/Hello";

function App() {
  const myName1 = "Shedrack";
  const myName2 = "Davis";

  return (
    <>
      <div>
        <Hello name={myName1} color="Pink"/>
        <Hello name={myName2} color="Blue"/>
      </div>
    </>
  );
}

export default App;
