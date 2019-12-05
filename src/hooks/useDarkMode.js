import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useToggle(darkMode, target) {
  useEffect(() => {
    console.log("dark mode = ", darkMode);
    console.log("local storage = ", window.localStorage.getItem("dark"));
    let darkTarget = document.querySelector(target);
    if (darkMode === true) {
      darkTarget.classList.add("dark-mode");
    } else if (darkMode === false) {
      darkTarget.classList.remove("dark-mode");
    } else {
      console.log("something went wrong");
    }
    // document.querySelector(target).classList.toggle("dark-mode");
  }, [darkMode]);
}

export function useDarkMode(key, initialValue, target) {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
  useToggle(darkMode, target);

  return [darkMode, setDarkMode];
}
