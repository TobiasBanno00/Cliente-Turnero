import Start from "../page/Start";
import SignIn from "../page/SignIn";
import Error404 from "../page/404/Err404";

export default [
    {
    path: "/",
    exact: true,
    page: Start,
    },
  {
    path: "/iniciarSesion",
    exact: true,
    page: SignIn,
  },
  {
    path: "*",
    page: Error404,
  },
];