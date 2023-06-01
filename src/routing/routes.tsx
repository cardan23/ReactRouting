import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Contact } from "../pages/Contact";
import { UserDetail } from "../pages/UserDetail";
import { Layout } from "../pages/Layout";
import UserPage from "../pages/UserPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    //root path
    path: "/",

    //Layout page
    element: <Layout />,

    //Manage the Error page, we will show this component when something fails
    errorElement: <ErrorPage />,

    //all children that will be rendered into our Outlet component
    children: [
      //all routes for our page
      //path, we define the path of the url for that section
      //element is the component we are going to show into that path
      //index true we are saying this is the index of the page
      { index: true, element: <HomePage /> },
      { path: "contact", element: <Contact /> },
      {
        path: "users/",
        element: <UserPage />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },
    ],
  },
]);

export default router;
