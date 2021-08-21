import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
    // console.log("UpperCase Button Is Clicked " + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLowerCase = () => {
    // console.log("UpperCase Button Is Clicked " + text);
    let newtext = text.toLowerCase();
    setText(newtext);
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
