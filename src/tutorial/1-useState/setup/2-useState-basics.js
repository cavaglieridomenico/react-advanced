import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Random Text");
  const handleClick = () => {
    text === "Random Text" ? setText("Hello!") : setText("Random Text");
  };
  return (
    <div className="container">
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Text
      </button>
    </div>
  );
};

export default UseStateBasics;
