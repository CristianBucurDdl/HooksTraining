import React from "react";
import { useCallback } from "react";
import { useState, useEffect } from "react";

const test = [1, 2, 3];

// const List = ({ number }) => {
//   const item = number();

//   return item.map((each) => {
//     return <h3>{each}</h3>;
//   });
// };
const List = ({ number }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(number());
    console.log("item updated");
  }, [number]);
  return items.map((each) => <h3>{each}</h3>);
};

export default function UseCallBack() {
  const [dark, setDark] = useState(true);
  const [number, setNumber] = useState(1);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#FFF " : "#333",
  };

  return (
    <div>
      <h1>UseCallBack:</h1>
      <form>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        ></input>
      </form>

      <button onClick={() => setDark((prevDark) => !prevDark)}>Theme</button>
      <div style={theme}>
        <List number={getItems} />
      </div>
    </div>
  );
}
