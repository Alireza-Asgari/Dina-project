import {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect,
} from "react";

const initialState = {
  products: false,
  story: false,
  services: false,
};



const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [click, setclick] = useState(initialState);
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [themeMood, setThemeMood] = useState(() => {
    if (sessionStorage.getItem("theme")) {
      return sessionStorage.getItem("theme");
    } else {
      return getCurrentTheme() ? "dark" : "light";
    }
  });
  const handleMode = (theme) => {
    sessionStorage.setItem("theme", theme);
    setThemeMood(theme);
  };
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", ({ matches }) => {
        if (matches) {
          handleMode("dark");
        } else {
          handleMode("light");
        }
      });
    if (themeMood == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMood]);
  return (
    <stateContext.Provider
      value={{
        click,
        showMenu,
        setShowMenu,
        setclick,
        initialState,
        open,
        setOpen,
        openSearch,
        setOpenSearch,
        themeMood,
        setThemeMood,
        handleMode,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};
export const useStateContext = () => useContext(stateContext);
