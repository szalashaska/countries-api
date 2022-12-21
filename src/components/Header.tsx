import Dark from "../assets/dark.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__name">Where in the world?</h1>
        <button className="header__button" type="button">
          <img src={Dark} alt="Dark icon." />
          Dark Mode
        </button>
      </div>
    </header>
  );
}

export default Header;
