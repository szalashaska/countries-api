import { useContext } from "react";
import CountriesCard from "../components/CountriesCard";
import Filter from "../components/Filter";
import Search from "../components/Search";
import CountriesContext from "../contexts/CountriesContext";

function Countries() {
  const { countriesData } = useContext(CountriesContext);

  return (
    <div className="page-container">
      <div className="input-container">
        <Search />
        <Filter />
      </div>
      <main className="countries-container">
        {countriesData.length > 0 &&
          countriesData.map((country) => {
            return <CountriesCard country={country} key={country.code} />;
          })}
      </main>
    </div>
  );
}

export default Countries;
