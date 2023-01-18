import {
  createContext,
  useEffect,
  ReactElement,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  CountriesType,
  ApiCountriesType,
  ApiCountryType,
  CountriesContextType,
  CountryType,
} from "../helpers/Types";

const BASE_URL = "https://restcountries.com/v3.1/all";

const CountriesContext = createContext<CountriesContextType>({
  countriesData: [],
  error: "",
  getCountry: () => {},
});

export default CountriesContext;

type Props = {
  children: ReactElement | ReactElement[];
};

export function CountriesProvider({ children }: Props) {
  const [countriesData, setCountriesData] = useState<CountriesType[]>([]);
  const [error, setError] = useState<string>("");

  const handleGetCountries = useCallback(async () => {
    try {
      const request = await fetch(BASE_URL);
      const response: ApiCountriesType[] = await request.json();

      if (request.ok) {
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
      } else setError("Something went wrong");
    } catch (err) {
      setError(`Unknown error, ${err}`);
    }
  }, []);

  const getCountry = async (countryCode: string) => {
    let countryData: CountryType[] = [];

    try {
      const request = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`,
      );
      const response: ApiCountryType[] = await request.json();

      if (request.ok) {
        countryData = response.map((country) => {
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
        });
      } else setError("Something went wrong");
    } catch (err) {
      setError(`Unknown error, ${err}`);
    }

    return countryData;
  };

  useEffect(() => {
    handleGetCountries();
  }, [handleGetCountries]);

  const contextData = useMemo(
    () => ({
      countriesData,
      getCountry,
      error,
    }),
    [countriesData, error],
  );

  return (
    <CountriesContext.Provider value={contextData}>
      {children}
    </CountriesContext.Provider>
  );
}
