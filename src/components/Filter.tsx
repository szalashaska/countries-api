import { Dispatch, SetStateAction, useEffect, useState } from "react";
import regionList from "../helpers/Regions";

type Props = {
  setFilter: Dispatch<SetStateAction<string>>;
};

function Filter({ setFilter }: Props) {
  const [userSelect, setUserSelect] = useState<string>("");

  useEffect(() => {
    setFilter(userSelect);
  }, [userSelect, setFilter]);

  return (
    <div className="filter-container">
      <select
        className="filter__select"
        value={userSelect}
        onChange={(e) => setUserSelect(e.target.value)}
      >
        <option disabled value="">
          Filter by Region
        </option>
        {regionList.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      {userSelect && (
        <button
          className="filter-clear"
          type="button"
          onClick={() => setUserSelect("")}
        >
          Clear filter
        </button>
      )}
    </div>
  );
}

export default Filter;
