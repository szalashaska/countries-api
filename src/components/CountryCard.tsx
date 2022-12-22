import { CountriesType } from "../helpers/Types";

type Props = {
  country: CountriesType;
};

function CountryCard({ country }: Props) {
  const { name } = country;
  return <div>{name}</div>;
}

export default CountryCard;
