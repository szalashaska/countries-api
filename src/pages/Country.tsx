import { useCallback, useEffect, useContext, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import { CountryType } from "../helpers/Types";
import LeftArrow from "../assets/left.svg";
import CountriesContext from "../contexts/CountriesContext";

function Country() {
  const { code } = useParams();
  const { getCountry } = useContext(CountriesContext);
  const [countryData, setCountryData] = useState<CountryType[]>([]);
  // const navigate = useNavigate();

  const handleGetCountry = useCallback(
    async (countryCode: string) => {
      const country = await getCountry(countryCode);
      if (country) setCountryData(country);
    },
    [getCountry],
  );

  useEffect(() => {
    if (code) {
      handleGetCountry(code);
    }
  }, [handleGetCountry, code]);

  return (
    <div className="page-container">
      <div className="container">
        <Link className="button flex" to="/">
          <img src={LeftArrow} alt="" />
          Back
        </Link>
      </div>
      {countryData.length > 0 && <CountryCard country={countryData} />}
    </div>
  );
}

export default Country;
