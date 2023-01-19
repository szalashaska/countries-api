import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ReactComponent as Searchy } from "../assets/search.svg";

type Props = {
  setSearch: Dispatch<SetStateAction<string>>;
};

function Search({ setSearch }: Props) {
  const [userInput, setUserInput] = useState<string>("");

  useEffect(() => {
    setSearch(userInput.toLowerCase().trim());
  }, [userInput, setSearch]);

  return (
    <div className="searchbox-container">
      <Searchy className="searchbox__icon" />
      <input
        className="searchbox__input"
        type="text"
        placeholder="Search for country..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
    </div>
  );
}

export default Search;
