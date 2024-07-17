import Navbar from "./components/Navbars.jsx";


import Homepage from "./routes/homePages/homePages.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage.jsx";
import Layout from "./routes/layout/layout.jsx";
import SinglePage from "./singlePage/singlePage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
} 

export default App;
