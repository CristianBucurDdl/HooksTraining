import React, { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0); // first item is the item that will return and the second is the item that will modify the first
  //  in the useState( declaration) you can declare the initial value :null ,boolean ," ",obj,
  //  or you can declare a inline function (like OnCLick ()) and its runed once or you can
  //  call an initial declared function to run every time its called
  return (
    <div>
      <h1>useState:</h1>
      <button
        onClick={() => {
          //   setCount((prevCount) => prevCount - 1);
          // here you can use
          //count but if its called again in the same function
          //it will change how many times its called, so for good
          //coding practice , use :prev"initialstate" => prev"initial
          // state" and function
          //eg:
          setCount(count - 1);
          //   setCount(count - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
