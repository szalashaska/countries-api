import { useCallback, useEffect, useState } from "react";
import { CountriesType } from "./helpers/Types";
import "./styles.scss";

function App() {
  const [countriesData, setCountriesData] = useState<CountriesType[]>([]);

  const handleGetData = useCallback(async () => {
    const request = await fetch("https://restcountries.com/v3.1/all");
    const response: CountriesType[] = await request.json();
    setCountriesData(response);
    // eslint-disable-next-line
  }, []);

  console.log(countriesData);
  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  return (
    <div>
      Hello World!
      <div className="dark-theme">elo</div>
    </div>
  );
}

export default App;
