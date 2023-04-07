import classes from "./BerryFlavorDetails.module.css";
import { useGetBerryFlavorDetailsQuery } from "../../../services/pokemon";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const BerryFlavorDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, error, isLoading } = useGetBerryFlavorDetailsQuery(
    `${params.berryName}`
  );
  console.log(data);
  return (
    <>
      {isLoading && !error && (
        <p style={{ textAlign: "center" }}>Loading content...</p>
      )}
      {error && !isLoading && (
        <p style={{ textAlign: "center" }}>
          There was an error loading content...
        </p>
      )}
      {!isLoading && !error && (
        <div className={classes.berryFlavorDetailContainer}>
          <h1>{data?.name.toUpperCase()}</h1>
          <div>
            <p className={classes.expendature}>SHARED BY BERRIES</p>
            <ul>
              {data?.berries.map((item) => (
                <li
                  onClick={() => navigate(`/berries/${item.berry.name}`)}
                  key={item.berry.name}
                >
                  {item.berry.name.toUpperCase()}
                  <p className={classes.berryFlavorItemDetail}>
                    {item.potency} Potency
                  </p>
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

export default BerryFlavorDetails;
