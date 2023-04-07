import classes from "./BerryFirmnessDetails.module.css";
import { useParams } from "react-router";
import { useGetBerryFirmnessDetailsQuery } from "../../../services/pokemon";
import { Link, useNavigate } from "react-router-dom";

const BerryFirmnessDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, error, isLoading } = useGetBerryFirmnessDetailsQuery(
    `${params.berryName}`
  );
  console.log(data);
  return (
    <>
      {isLoading && !error && (
        <p style={{ textAlign: "center" }}>Loading data...</p>
      )}
      {error && !isLoading && (
        <p style={{ textAlign: "center" }}>
          There was and error loading data...
        </p>
      )}
      {!isLoading && !error && (
        <div className={classes.berryFirmnessContainer}>
          <h1>{data?.name.toUpperCase()}</h1>
          <div>
            <p>SHARED BY BERRIES</p>
            <ul>
              {data?.berries.map((item) => (
                <li
                  onClick={() => navigate(`/berries/${item.name}`)}
                  key={item.name}
                >
                  {item.name.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>
          <Link to={"../.."}>Back</Link>
        </div>
      )}
    </>
  );
};

export default BerryFirmnessDetails;
