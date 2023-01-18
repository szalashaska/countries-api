import { useContext } from "react";
import { Link } from "react-router-dom";
import CountriesContext from "../contexts/CountriesContext";

type Props = {
  borderCountries: string[];
};

function BorderCountries({ borderCountries }: Props) {
  const { countriesData } = useContext(CountriesContext);

  return (
    <>
      <p className="country__text__borders">Border Countries: </p>
      <div className="country__borders">
        {borderCountries.map((border) => (
          <Link className="button" to={`/${border}`} key={border}>
            {countriesData.find((country) => country.code === border)?.name}
          </Link>
        ))}
      </div>
    </>
  );
}

export default BorderCountries;
