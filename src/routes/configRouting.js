import Start from "../page/Start";
import Shift from "../page/Shift";
import Error404 from "../page/404/Err404";

export default [
    {
    path: "/",
    exact: true,
    page: Start,
    },
  {
    path: "/turno",
    exact: true,
    page: Shift,
  },
  {
    path: "*",
    page: Error404,
  },
];