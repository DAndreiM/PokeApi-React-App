import classes from "./BerryFirmnessDetails.module.css";
import { useParams } from "react-router";
import { useGetBerryFirmnessDetailsQuery } from "../../../services/pokemon";
import { Link, useNavigate } from "react-router-dom";
import QueryDataWrapper from "../../../ui/QueryDataWrapper";

const BerryFirmnessDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, error, isLoading } = useGetBerryFirmnessDetailsQuery(
    `${params.berryName}`
  );
  console.log(data);
  return (
    <QueryDataWrapper isLoading={isLoading} error={error}>
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
    </QueryDataWrapper>
  );
};

export default BerryFirmnessDetails;
