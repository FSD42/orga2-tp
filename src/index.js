import "./assets/styles/index.scss";
import Home from './pages/Jobs.js';
import Profile from "./pages/Profile";
import Error from "./pages/Error";

import route from './functions/route';

route({ path: "/", element: Home(), title: "Our Jobs"});
route({ path: "/jobs", element: Home(), title: "Our Jobs"});
route({ path: "/profile", element: Profile(), title: "My Profile"});
route({ path: "*", element: Error(), title: "Error"});