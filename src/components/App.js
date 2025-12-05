import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  // state to control paragraph visibility
  const [showPara, setShowPara] = useState(false);
  return (
    <div id="main">
      {/* Button with required ID */}
      <button id="click" onClick={() => setShowPara(true)}>
        Click Me
      </button>

      {/* Conditional rendering of paragraph */}
      {showPara && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.
        </p>
      )}
    </div>
  );
}


export default App;
