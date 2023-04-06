import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root";
import Calculator from "./pages/Calculator";
import ErrorPage from "./pages/ErrorPage";
import PokemonInfo from "./pages/PokemonInfo";
import PokemonExtraInfo from "./pages/PokemonExtraInfo";
import BerryDetailPage from "./pages/BerryDetailPage";
import { Children, lazy, Suspense } from "react";
import { loader as PokemonDetailLoader } from "./pages/PokemonInfo";

const Pokemon = lazy(() => import("./pages/Pokemon"));
const Berries = lazy(() => import("./pages/Berries"));

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
                    element: <BerryDetailPage />,
                  },
                ],
              },
              {
                path: "firmness",
                children: [
                  {
                    path: ":berryName",
                    element: <BerryDetailPage />,
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
