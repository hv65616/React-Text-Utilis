import "./App.css";
// import About from "./Components/About";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");

  const [modeText, setModeText] = useState("LightMode");

  const [alert, setAlert] = useState(null);

  // const removeBackgroundColor = () => {
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-info");
  // };

  const toggleMode = (cls) => {
    // removeBackgroundColor();
    // document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      console.log(cls);
      setMode("dark");
      setModeText("DarkMode");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Is Enabled", "success");
      document.title = "Text-Utilis: Dark-Mode";
    } else {
      setMode("light");
      setModeText("LightMode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Is Enabled", "success");
      document.title = "Text-Utilis: Light-Mode";
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
      {/* <Router> */}
        <NavBar
          title="Text-Utilis"
          mode={mode}
          toggleMode={toggleMode}
          modeText={modeText}
        ></NavBar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/about">
              <About></About>
            </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm
                heading="Enter your text here:-"
                mode={mode}
                showAlert={showAlert}
              ></TextForm>
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
