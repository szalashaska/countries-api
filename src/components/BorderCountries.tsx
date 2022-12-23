import { Link } from "react-router-dom";

type Props = {
  borderCountries: string[];
};

function BorderCountries({ borderCountries }: Props) {
  return (
    <>
      <p className="country__text__borders">Border Countries: </p>
      <div className="country__borders">
        {borderCountries.map((border) => (
          <Link className="button" to="/" key={border}>
            {border}
          </Link>
        ))}
      </div>
    </>
  );
}

export default BorderCountries;
