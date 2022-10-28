import { render } from "@testing-library/react";
import React, { useEffect, useRef, useState } from "react";
//useRef is used if you wahant to update a state without rerendering the component
//and if you need to reference a specific html atribute
export default function UseRefHook() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const inputRef = useRef();
  const calTimes = useRef(0);

  function calc() {
    calTimes.current = calTimes.current + 1;
    console.log("potato", calTimes.current);
  }
  function focus() {
    inputRef.current = inputRef.current.focus();
  }
  useEffect(() => {
    renderCount.current = renderCount.current += 1;
  });

  return (
    <div>
      <h1>UseRefHook:</h1>
      <br />
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button
        onClick={() => {
          calc();
        }}
      >
        gg
      </button>
      <br />
      <h3>hy my name is :{name}</h3>
      <h3>
        ref ={JSON.stringify(renderCount)} {calTimes.current}
      </h3>
      <button onClick={focus}>focus</button>
    </div>
  );
}
