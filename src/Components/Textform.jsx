import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function Textform(props) {
  const [text, setText] = useState("enter text here");
  const handleUpclick = () => {
    // console.log("Uppercaseclicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handlelowerclick = () => {
    // console.log("Uppercaseclicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleonchange = (e) => {
    // console.log("onchangeclicked");
    setText(e.target.value); //this is for adding the text without value not able to enter any value
  };
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              value={text}
              onChange={handleonchange} //this is for on the value change without this we cant change the value
              rows={8}
            />
          </Form.Group>
        </Form>
        {/* when I click on the below button handleupclick will trigger the function */}
        <button className="btn btn-primary" onClick={handleUpclick}>
          Convert to uppercase
        </button>

        <button className="btn btn-primary ms-1" onClick={handlelowerclick}>
          Convert to lowercase
        </button>
      </div>
      <div className="container my-3">
        <h5>Your text summary</h5>
        <p>
          {text.split(" ").length} word and {text.length} charaters
        </p>
        {/* Time taken by user to read these words as per internet on an average user take 0.008min to read single word */}
        <p> {0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Textform;
