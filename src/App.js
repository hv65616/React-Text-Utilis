import "./App.css";
// import About from "./Components/About";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const [modeText, setModeText] = useState("LightMode");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("DarkMode");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      setModeText("LightMode");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <NavBar
        title="Text-Utilis"
        mode={mode}
        toggleMode={toggleMode}
        modeText={modeText}
      ></NavBar>
      <div className="container my-3">
        <TextForm heading="Enter your text here:-" mode={mode}></TextForm>
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
