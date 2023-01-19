import { useContext } from "react";
import Dark from "../assets/dark.svg";
import Bright from "../assets/bright.svg";
import ThemeContext, { ThemeValues } from "../contexts/ThemeContext";

function Header() {
  const { theme, handleThemeToggle } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__name">Where in the world?</h1>
        <button
          className="header__button"
          type="button"
          onClick={() => handleThemeToggle()}
        >
          {theme === ThemeValues.BRIGHT ? (
            <>
              <img src={Dark} alt="Dark icon." />
              Dark Mode
            </>
          ) : (
            <>
              <img src={Bright} alt="Bright icon." />
              Bright Mode
            </>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
