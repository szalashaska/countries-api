import { CountryType } from "../helpers/Types";
import BorderCountries from "./BorderCountries";

type Props = {
  country: CountryType[];
};

function CountryCard({ country }: Props) {
  const [
    {
      flagURL,
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      tld,
      currencies,
      languages,
      borderCountries,
    },
  ] = country;

  return (
    <div className="country-container">
      <img className="country__flag" src={flagURL} alt={`${name} flag.`} />

      <div className="country__info">
        <strong className="country__info__name">{name}</strong>

        <div className="country__info__wrapper">
          <div className="country__info__column">
            <p className="country__text__desc">
              Native Name:{" "}
              <span className="country__text__val">{nativeName}</span>
            </p>
            <p className="country__text__desc">
              Population:{" "}
              <span className="country__text__val">
                {population.toLocaleString()}
              </span>
            </p>
            <p className="country__text__desc">
              Region: <span className="country__text__val">{region}</span>
            </p>
            <p className="country__text__desc">
              Sub Region:{" "}
              <span className="country__text__val">{subregion}</span>
            </p>
            <p className="country__text__desc">
              Capital: <span className="country__text__val">{capital}</span>
            </p>
          </div>

          <div className="country__info__column">
            <p className="country__text__desc">
              Top Level Domain:{" "}
              <span className="country__text__val">{tld.join(", ")}</span>
            </p>
            <p className="country__text__desc">
              Currencies:{" "}
              <span className="country__text__val">{currencies}</span>
            </p>
            <p className="country__text__desc">
              Languages:{" "}
              <span className="country__text__val">{languages.join(", ")}</span>
            </p>
          </div>
        </div>

        {borderCountries && (
          <BorderCountries borderCountries={borderCountries} />
        )}
      </div>
    </div>
  );
}

export default CountryCard;
