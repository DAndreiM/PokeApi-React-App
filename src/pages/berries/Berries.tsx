import { useAppDispatch, useAppSelector } from "../../store";
import { berriesSliceActions, loadBerries } from "../../store/berriesSlice";
import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import BerriesList from "../../components/pokemon/berries/BerriesList";

const Berries = () => {
  const dispatch = useAppDispatch();
  const berries = useAppSelector((item) => item.berriesSlice.items);
  const error = useAppSelector((item) => item.berriesSlice.errorState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const offset = berries.length;

  useEffect(() => {
    if (offset === 0) {
      setIsLoading(true);
      dispatch(
        loadBerries("https://pokeapi.co/api/v2/berry?offset=0&limit=10")
      );
      setIsLoading(false);
    }
  }, [dispatch, offset]);

  const loadMoreBerries = async () => {
    if (isLoading || error) return;
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/berry?offset=${offset}&limit=10`
      );

      if (!response.ok) throw new Error("Something went wrong !!!");

      const data = await response.json();

      for (const i in data.results) {
        dispatch(
          berriesSliceActions.addItems({
            id: +i + offset + 1,
            name: data.results[i].name,
            url: data.results[i].url,
          })
        );
      }
    } catch (error: any) {
      dispatch(berriesSliceActions.setError(error.message));
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      {!error && <BerriesList berry={berries} />}
      {isLoading && !error && (
        <p style={{ textAlign: "center" }}>Loading more content...</p>
      )}
      <Button onClick={loadMoreBerries} disabled={isLoading}>
        {isLoading ? "Loading more..." : "Load more"}
      </Button>
    </>
  );
};

export default Berries;
