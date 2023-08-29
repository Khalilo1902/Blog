import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import CreateBlogPage from "../pages/CreateBlogPage";
import AuthorPage from "../pages/AuthorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/create-article",
        element: <CreateBlogPage />,
      },
      {
        path: "/author-directory",
        element: <AuthorPage />,
      },
    ],
  },
]);
