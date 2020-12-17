import React from "react";
import ReactDOM from "react-dom";
import QuantitySelector from "./components/QuantitySelector/QuantitySelector";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* List => inputUI & Counter */}
      <QuantitySelector />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
