import {
  createContext,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeContextType } from "../helpers/Types";

const ThemeContext = createContext<ThemeContextType>({
  theme: "",
  handleThemeToggle: () => {},
});

export default ThemeContext;

type Props = {
  children: ReactElement | ReactElement[];
};

export enum ThemeValues {
  DARK = "dark",
  BRIGHT = "bright",
  KEY = "theme",
}

const themeClassName = "dark";

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem(ThemeValues.KEY) || ThemeValues.BRIGHT,
  );

  const handleThemeToggle: () => void = useCallback(() => {
    const themeColor =
      theme === ThemeValues.BRIGHT ? ThemeValues.DARK : ThemeValues.BRIGHT;
    setTheme(themeColor);
    localStorage.setItem(ThemeValues.KEY, themeColor);
  }, [theme]);

  useEffect(() => {
    document.body.classList.toggle(
      themeClassName,
      theme !== ThemeValues.BRIGHT,
    );
  }, [theme]);

  const contextData = useMemo(
    () => ({
      theme,
      handleThemeToggle,
    }),
    [theme, handleThemeToggle],
  );
  return (
    <ThemeContext.Provider value={contextData}>
      {children}
    </ThemeContext.Provider>
  );
}
