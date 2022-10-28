import React from "react";
import { useEffect } from "react";
import { useState, useMemo } from "react";

export default function UseMemoHook() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  //useMemo is a optimisation hook ,so you don't rerender in case your parameter is actually changed
  // for example , you have a slow function , and don't whant to
  // re render every time , You can call it only if the parameter is changed
  //or if you have a large object with functionality , you can wrap it in a useMemo
  //so you can render it ony if a parameter is changed

  //eg:
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

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
