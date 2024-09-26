import App from "../App";
import AllJob from "../presentation/AllJob";
import ErrorPage from "../presentation/ErrorPage";
import PostJob from "../presentation/PostJob";
import { ALL_JOB, HOME_PAGE } from "../utils/routeConstant";

export const allRouter = [
  {
    path: HOME_PAGE,
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        index: true,
        element: <PostJob />,
      },
      {
        path: ALL_JOB,
        element: <AllJob />,
      },
    ],
  },
];
