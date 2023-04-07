import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root";
import Calculator from "./pages/calculator/Calculator";
import ErrorPage from "./pages/error/ErrorPage";
import PokemonInfo from "./pages/pokemon/PokemonInfo";
import PokemonExtraInfo from "./pages/pokemon/PokemonExtraInfo";
import BerryDetailPage from "./pages/berries/BerryDetailPage";
import BerryFirmnessDetailsPage from "./pages/berries/BerryFirmnessDetailsPage";
import BerryFlavorDetailsPage from "./pages/berries/BerryFlavorDetailsPage";
import { lazy, Suspense } from "react";
import { loader as PokemonDetailLoader } from "./pages/pokemon/PokemonInfo";

const Pokemon = lazy(() => import("./pages/pokemon/Pokemon"));
const Berries = lazy(() => import("./pages/berries/Berries"));

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Calculator />,
      },
      {
        path: "/pokemon",
        children: [
          {
            index: true,
            element: (
              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <Pokemon />
              </Suspense>
            ),
          },
          {
            path: ":pokemonID",
            loader: PokemonDetailLoader,
            id: "pokemonRoute",
            children: [
              {
                index: true,
                element: <PokemonInfo />,
              },
              {
                path: "extra",
                element: <PokemonExtraInfo />,
              },
            ],
          },
        ],
      },
      {
        path: "/berries",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p style={{ textAlign: "center" }}></p>}>
                <Berries />
              </Suspense>
            ),
          },
          {
            path: ":berryID",
            children: [
              {
                index: true,
                element: <BerryDetailPage />,
              },
              {
                path: "flavor",
                children: [
                  {
                    path: ":berryName",
                    element: <BerryFlavorDetailsPage />,
                  },
                ],
              },
              {
                path: "firmness",
                children: [
                  {
                    path: ":berryName",
                    element: <BerryFirmnessDetailsPage />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={Routes} />;
}

export default App;
