import React, { useReducer, useState } from "react";

const ACTIONS = {
  ///The Action Objects IS a way to add all the case types from reducer to make it easier to read and clean up the code
  INCREMENT: "increment", /// making it easier to change any action from one place , not to change it everywhere it appears
  DECREMENT: "decrement", //also its a good coding practice
};

function myFirstReducerFunction(state, action) {
  ///reducer function takes the state and action as a prop
  switch (
    action.type //and you create the logic to modify the state
  ) {
    case ACTIONS.INCREMENT: //based on the case scenaryo , where you specify the diferent case
      return { count: state.count + 1 }; // in the dispach callFunction
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function UseReducer() {
  //   const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(myFirstReducerFunction, { count: 0 }); //form of the state will be:{state:{count 0}}
  //same as above in the                 //reducer function     initial form of the state (like: (useState(0)))
  // array you add your state name        //actual functionality
  // and Call function to modify          //of how and why the state  changes
  // the state

  ///useState example--------------------------------------
  //   function increment() {
  //     setCount((prevCount) => prevCount + 1);
  //   }
  //   function decrement() {
  //     setCount((prevCount) => prevCount - 1);
  //   }

  // useReducer example

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }
  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <div>
      <h1>UseReducer:</h1>
      <br />

      <button onClick={increment}>+</button>
      <span>{state.count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}
