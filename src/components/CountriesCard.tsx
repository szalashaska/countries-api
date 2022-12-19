import { CountriesType } from "../helpers/Types";

type Props = {
  country: CountriesType;
};

function CountriesCard({ country }: Props) {
  const { code, flagURL, name, population, region, capital } = country;
  return (
    <a href={`/${code}`}>
      <img src={flagURL} alt={`${name} flag.`} />
      <strong>{name}</strong>
      <p>{population}</p>
      <p>{region}</p>
      <p>{capital}</p>
    </a>
  );
}

export default CountriesCard;
