import { useCallback, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
import { ApiCountryType } from "../helpers/Types";

const countryCode = "BEL";

function Country() {
  // const { code } = useParams();
  // const navigate = useNavigate();

  const handleGetCountry = useCallback(async () => {
    const request = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`,
    );
    const response: ApiCountryType[] = await request.json();
    // eslint-disable-next-line
    console.log(
      response.map((country) => {
        return {
          flags: country.flags.png,
          name: country.name.common,
          nativeName: Object.values(country.name.nativeName)[0].common,
          population: country.population,
          region: country.region,
          subregion: country.subregion,
          capital: country.capital ? country.capital[0] : "",
          tld: country.tld,
          cioc: country.cca3,
          currencies: Object.values(country.currencies)[0].name,
          languages: Object.values(country.languages),
          borders: country.borders,
        };
      }),
    );
  }, []);

  useEffect(() => {
    handleGetCountry();
  }, [handleGetCountry]);

  return <div>Country</div>;
}

export default Country;
