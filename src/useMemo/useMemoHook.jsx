import React from "react";
import { useEffect } from "react";
import { useState, useMemo } from "react";

export default function UseMemoHook() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  //   const doubleNumber = useEffect(() => {
  //     return slowFunction(number);
  //   }, [number]);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  //   let doubleNumber = 0;
  //   useEffect(() => {
  //     slowFunction(number);
  //   }, [number]);

  return (
    <div>
      <h1>useMemoHook:</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>
      <br />
      <button on onClick={() => setDark((prevDark) => !prevDark)}>
        Change theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
      {/* <div style={themeStyle}>test</div> */}
    </div>
  );
}
function slowFunction(num) {
  console.log("calling slowFunction");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
