import { useContext, useState } from "react";
import CountriesCard from "../components/CountriesCard";
import Filter from "../components/Filter";
import Search from "../components/Search";
import CountriesContext from "../contexts/CountriesContext";

function Countries() {
  const { countriesData } = useContext(CountriesContext);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  if (countriesData.length === 0) return <div>No countries to show</div>;

  return (
    <div className="page-container">
      <div className="input-container">
        <Search setSearch={setSearch} />
        <Filter setFilter={setFilter} />
      </div>
      <main className="countries-container">
        {search || filter
          ? // When search query or filter was provided
            countriesData
              .filter((country) =>
                filter
                  ? country.name.toLowerCase().includes(search) &&
                    country.region === filter
                  : country.name.toLowerCase().includes(search),
              )
              .map((country) => {
                return <CountriesCard country={country} key={country.code} />;
              })
          : // when no filter or serach query was provided
            countriesData.map((country) => {
              return <CountriesCard country={country} key={country.code} />;
            })}
      </main>
    </div>
  );
}

export default Countries;
