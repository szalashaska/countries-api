import regionList from "../helpers/Regions";

function Filter() {
  return (
    <div className="filter-container">
      <select className="filter__select">
        <option>Filter by Region</option>
        {regionList.map((region) => (
          <option key={region}>{region}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
