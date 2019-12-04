import { useLocalStorage } from "./useLocalStorage";

function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("dark", false);
}
