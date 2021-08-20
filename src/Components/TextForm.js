import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
    // console.log("UpperCase Button Is Clicked " + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter You Text");
  return (
    <div>
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
      <button className="btn btn-primary" onClick={handleUpperCase}>
        Convert To UpperCase
      </button>
    </div>
  );
}
