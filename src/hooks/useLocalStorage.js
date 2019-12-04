import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    console.log(item ? JSON.parse(item) : initialValue);
    return item ? JSON.parse(item) : initialValue;
    // if (item === null) {
    //   return initialValue;
    // } else if (item === true) {
    //   return true;
    // } else {
    //   return false;
    // }
  });

  const setValue = value => {
    setStoredValue(value);
    // console.log(value)

    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
