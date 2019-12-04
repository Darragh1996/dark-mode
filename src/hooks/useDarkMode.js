import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(key) {
  const [darkMode, setDarkMode] = useLocalStorage(key, false);

  useEffect(() => {
    document.querySelector(".navbar").classList.toggle("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
