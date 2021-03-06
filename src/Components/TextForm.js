import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted To UpperCase", "success");
  };
  const handleLowerCase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted To LowerCase", "success");
  };
  const handleClearCase = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("TextBox Cleared", "success");
  };
  const handleAlternatingCase = () => {
    let newtext = text.toLowerCase().split("");
    for (let index = 0; index < newtext.length; index += 2) {
      newtext[index] = newtext[index].toUpperCase();
    }
    setText(newtext.join(""));
    props.showAlert("Converted To AlternatingCase", "success");
  };
  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "grey",
        }}
      >
        <h1>Enter Your Text To Analyse</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "grey",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpperCase}
          disabled={text.length === 0}
        >
          Convert To UpperCase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowerCase}
          disabled={text.length === 0}
        >
          Convert To LowerCase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleAlternatingCase}
          disabled={text.length === 0}
        >
          Convert to AlTeRnAtInG Case
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearCase}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "grey",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters here.
        </p>
        <h3>Your Text Preview</h3>
        <p>
          {text.length > 0 ? text : "Nothing to Preview Here :)"}
        </p>
      </div>
    </>
  );
}
