import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavScrollExample from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <NavScrollExample title="TextUtiles" Abt="About2" />
      <div className="container my-3">
        <Textform heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
