import { Link } from "react-router-dom";
import { CountriesType } from "../helpers/Types";

type Props = {
  country: CountriesType;
};

function CountriesCard({ country }: Props) {
  const { code, flagURL, name, population, region, capital } = country;
  return (
    <Link className="card-container" to={`/${code}`}>
      <img className="card__flag" src={flagURL} alt={`${name} flag.`} />
      <div className="card__text-wrapper">
        <strong className="card__text__name">{name}</strong>
        <p className="card__text__desc">
          Population:{" "}
          <span className="card__text__val">{population.toLocaleString()}</span>
        </p>
        <p className="card__text__desc">
          Region: <span className="card__text__val">{region}</span>
        </p>
        <p className="card__text__desc">
          Capital: <span className="card__text__val">{capital}</span>
        </p>
      </div>
    </Link>
  );
}

export default CountriesCard;
