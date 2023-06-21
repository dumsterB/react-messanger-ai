import { createBrowserRouter } from "react-router-dom";
import About from "./pages/about";
import Favourites from "./pages/favourites";
import Main from './pages/main'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main /> ,
    },
    {
        path: "/about",
        element: <About /> ,
    },
    {
        path: "/favourites",
        element: <Favourites /> ,
    },
]);
export default router
















