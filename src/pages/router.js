import { pageName } from "../../constant";
import Login from "./auth/login";
import Home from "./home";
import MovieDetails from "./MovieDetail";
import Splash from "./splash";

const router = [
  { name: pageName.splash, component: Splash },
  { name: pageName.auth.login, component: Login },
  { name: pageName.home.index, component: Home },
  { name: pageName.movie.details.index, component: MovieDetails },
];

export default router;
