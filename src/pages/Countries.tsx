import { useCallback, useEffect, useState } from "react";
import CountriesCard from "../components/CountriesCard";
import Filter from "../components/Filter";
import Search from "../components/Search";
import { ApiCountriesType, CountriesType } from "../helpers/Types";

function Countries() {
  const [countriesData, setCountriesData] = useState<CountriesType[]>([]);

  const handleGetCountries = useCallback(async () => {
    const request = await fetch("https://restcountries.com/v3.1/all");
    const response: ApiCountriesType[] = await request.json();
    // eslint-disable-next-line
    console.log(response);

    setCountriesData(
      response.map((country) => {
        return {
          code: country.cca3,
          flagURL: country.flags.png,
          name: country.name.common,
          population: country.population,
          region: country.region,
          capital: country.capital ? country.capital[0] : "",
        };
      }),
    );
  }, []);

  useEffect(() => {
    handleGetCountries();
  }, [handleGetCountries]);

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
