import { useCallback, useEffect, useState } from "react";
import { ApiCountriesType, CountriesType } from "../helpers/Types";

function Countries() {
  const [countriesData, setCountriesData] = useState<CountriesType[]>([]);

  const handleGetCountries = useCallback(async () => {
    const request = await fetch("https://restcountries.com/v3.1/all");
    const response: ApiCountriesType[] = await request.json();

    console.log(response);

    setCountriesData(
      response.map((country) => {
        return {
          code: country.cioc,
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

  return <div>{countriesData.map((c) => c.capital)}</div>;
}

export default Countries;
