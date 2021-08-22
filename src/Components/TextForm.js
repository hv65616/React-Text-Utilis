import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLowerCase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleClearCase = () => {
    let newtext = "";
    setText(newtext);
  };
  const handleAlternatingCase = () => {
    let newtext = text.toLowerCase().split("");
    for (let index = 0; index < newtext.length; index += 2) {
      newtext[index] = newtext[index].toUpperCase();
    }
    setText(newtext.join(""));
  };
  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
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
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperCase}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCase}>
          Convert To LowerCase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleAlternatingCase}
        >
          Convert to AlTeRnAtInG Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearCase}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters here.
        </p>
        <h3>Your Text Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
