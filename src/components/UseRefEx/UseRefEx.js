import { render } from "@testing-library/react";
import React, { useState, useEffect, useRef } from "react";
function App() {
  const [name, setName] = useState("");
  const inputRef = useRef();
  // renderCount == { current: 0 }
  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });
  const handleOnChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const handleOnClick = (event) => {
    event.preventDefault();
    console.log(inputRef.current);
  };
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={handleOnChange}
      />
      <p> My name is {name}</p>
      <button onClick={handleOnClick}>Focus</button>
    </>
  );
}
export default App;