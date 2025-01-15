import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function Textform(props) {
  const [text, setText] = useState("enter text here");
  const handleUpclick = () => {
    console.log("Uppercaseclicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleonchange = (e) => {
    console.log("onchangeclicked");
    setText(e.target.value);
  };
  return (
    <div>
      <h1>{props.heading}</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            value={text}
            onChange={handleonchange}
            rows={8}
          />
        </Form.Group>
      </Form>
      <button className="btn btn-primary" onClick={handleUpclick}>
        Convert to uppercase
      </button>
    </div>
  );
}

export default Textform;
