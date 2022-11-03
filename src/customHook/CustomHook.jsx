import React from "react";

import { useLocalStorage } from "./useLocalStorage";
export default function CustomHook() {
  const [name, setName] = useLocalStorage("name");
  return (
    <div>
      <h1>CustomHook:</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
