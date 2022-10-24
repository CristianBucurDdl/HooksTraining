import React, { useEffect } from "react";
import { useState } from "react";

export default function UseEffectHook() {
  const [resourceType, setResourceType] = useState("");
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    console.log("resourceType changed");
  }, [resourceType]); //useEffect trigers only after resorceType is changed
  //   use effect takes a function that is trygered after component renders
  //   second argument is epmty[ ] to tryger after initial render or when something changes
  //   as in the exaple above

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
      .then(console.log(items));
  }, [resourceType]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h1>UseEffectHook:</h1>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <h2>{resourceType}</h2>
      <>{windowWidth}</>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}
