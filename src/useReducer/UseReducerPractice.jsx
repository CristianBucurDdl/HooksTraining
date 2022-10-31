import React, { useReducer, useState } from "react";

const ACTIONS = {
  ADD_NUMBER: "add-number",
  ADD_AGE: "add-age",
  ADD_HEIGHT: "add-height",
  REMOVE_ITEM: "remove-item",
};

function reducer(arr, action) {
  switch (action.type) {
    case ACTIONS.ADD_NUMBER:
      if (action.payload.number.trim().length !== 0) {
        return [...arr, action.payload.number];
      } else {
        return [...arr];
      }
    case ACTIONS.REMOVE_ITEM:
      return arr.filter((item) => item !== action.payload.number);
    //if (action.payload.number exists in arr ) then remove it

    default:
      return arr;
  }
}
export default function UseReducerPractice() {
  //   const [state, setState] = useState([]);
  const [number, setNumber] = useState();
  const [arr, dispatch] = useReducer(reducer, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_NUMBER, payload: { number: number } });

    setNumber("");
  }

  console.log(arr);
  return (
    <div>
      <h1>UseReducerPractice:</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="text"
          placeholder="enterText"
        />
      </form>
      <button>t</button>
      {arr.map((item) => {
        return (
          <div>
            <span>
              <br />
              {item}
              <button
                onClick={() =>
                  dispatch({
                    type: ACTIONS.REMOVE_ITEM,
                    payload: { number: item },
                  })
                }
              >
                remove
              </button>
              <br />
            </span>
          </div>
        );
      })}
      {/* <select name="Persons" id="Persons">
          <option id="age">Age</option>
          <option id="sex">Sex</option>
          <option id="height">Height</option>
        </select> */}
      {/* <option>Name</option>
       */}
    </div>
  );
}
