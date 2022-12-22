import { useCallback, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { ApiCountryType, CountryType } from "../helpers/Types";

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
      <Link className="button" to="/">
        Back
      </Link>
      {countryData.length > 0 && <>hi</>}
    </div>
  );
}

export default Country;
