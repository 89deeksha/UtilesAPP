import React from "react";
import Form from "react-bootstrap/Form";
function Textform(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={8} />
        </Form.Group>
      </Form>
      <button className="btn btn-primary">Convert to uppercase</button>
    </div>
  );
}

export default Textform;
