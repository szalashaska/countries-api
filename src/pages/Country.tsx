import { useCallback, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import { ApiCountryType, CountryType } from "../helpers/Types";
import LeftArrow from "../assets/left.svg";

function Country() {
  const { code } = useParams();
  const [countryData, setCountryData] = useState<CountryType[]>([]);
  // const navigate = useNavigate();

  const handleGetCountry = useCallback(async (countryCode: string) => {
    const request = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`,
    );
    const response: ApiCountryType[] = await request.json();
    setCountryData(
      response.map((country) => {
        return {
          code: country.cca3,
          flagURL: country.flags.png,
          name: country.name.common,
          nativeName: Object.values(country.name.nativeName)[0].common,
          population: country.population,
          region: country.region,
          subregion: country.subregion,
          capital: country.capital ? country.capital[0] : "",
          tld: country.tld,
          currencies: Object.values(country.currencies)[0].name,
          languages: Object.values(country.languages),
          borderCountries: country.borders,
        };
      }),
    );
  }, []);

  useEffect(() => {
    if (code) {
      handleGetCountry(code);
    }
  }, [handleGetCountry, code]);

  return (
    <div className="page-container">
      <div className="container">
        <Link className="button flex" to="/">
          <img src={LeftArrow} alt="" />
          Back
        </Link>
      </div>
      {countryData.length > 0 && <CountryCard country={countryData} />}
    </div>
  );
}

export default Country;
