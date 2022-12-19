import { useCallback, useEffect } from "react";

const countryCode = "BEL";

function Country() {
  const handleGetCountry = useCallback(async () => {
    const request = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`,
    );
    const response = await request.json();

    console.log(
      response.map((country: any) => {
        return {
          flags: country.flags,
          name: country.name,
          nativeName: country.name.nativeName,
          population: country.population,
          region: country.region,
          subregion: country.subregion,
          capital: country.capital,
          tld: country.tld,
          cioc: country.cioc,
          currencies: country.currencies,
          languages: country.languages,
          borders: country.borders,
        };
      }),
    );
  }, []);
  // flags: { png: string };
  // name: { common: string };
  // nativeName: { official: string };
  // population: number;
  // region: string;
  // subregion: string;
  // capital: string[] | undefined;
  // tld: string[];
  // cioc: string;
  // currencies: { [key: string]: string };
  // languages: object;
  // borders: string[];

  useEffect(() => {
    handleGetCountry();
  }, [handleGetCountry]);

  return <div>Country</div>;
}

export default Country;
