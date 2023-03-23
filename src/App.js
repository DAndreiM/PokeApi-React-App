import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root";
import Calculator from "./pages/Calculator";
import ErrorPage from "./pages/ErrorPage";
import { lazy, Suspense } from "react";

const Pokemon = lazy(() => import("./pages/Pokemon"));

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
            element: <Pokemon />,
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
