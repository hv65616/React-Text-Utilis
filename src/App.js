import "./App.css";
// import About from "./Components/About";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");

  const [modeText, setModeText] = useState("LightMode");

  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("DarkMode");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Is Enabled", "success");
    } else {
      setMode("light");
      setModeText("LightMode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Is Enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <>
      <NavBar
        title="Text-Utilis"
        mode={mode}
        toggleMode={toggleMode}
        modeText={modeText}
      ></NavBar>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <TextForm
          heading="Enter your text here:-"
          mode={mode}
          showAlert={showAlert}
        ></TextForm>
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
