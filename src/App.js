import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Calculator from "./pages/Calculator";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Home />,
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
            element: <Pokemon />,
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
