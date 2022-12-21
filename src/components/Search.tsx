import SearchIco from "../assets/search.svg";

function Search() {
  return (
    <div className="searchbox-container">
      <img className="searchbox__icon" src={SearchIco} alt="" />
      <input
        className="searchbox__input"
        type="text"
        placeholder="Search for country..."
      />
    </div>
  );
}

export default Search;
