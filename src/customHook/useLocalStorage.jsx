import { useState, useEffect } from "react";

function getSavedValue(key, initialValue) {
  //   const savedValue = JSON.parse(localStorage.getItem(key));

  //   if (savedValue) return savedValue;

  //   if (initialValue instanceof Function) return initialValue();

  return initialValue;
}

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    // // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, value]);

  return [value, setValue];
}
