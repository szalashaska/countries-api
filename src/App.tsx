import { useCallback, useEffect, useState } from "react";
import { ApiCountriesType, CountriesType } from "./helpers/Types";
import "./styles.scss";

function App() {
  const [countriesData, setCountriesData] = useState<CountriesType[]>([]);

  const handleGetData = useCallback(async () => {
    const request = await fetch("https://restcountries.com/v3.1/all");
    const response: ApiCountriesType[] = await request.json();

    setCountriesData(
      response.map((country) => {
        return {
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
    handleGetData();
  }, [handleGetData]);

  return <div>{countriesData && countriesData.map((c) => c.name)}</div>;
}

export default App;
