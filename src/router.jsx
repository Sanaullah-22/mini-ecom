import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { NavLayout } from "./layout/NavLayout";
import { loader as recentLoader } from './component/home/RecentProduct'

export const router = createBrowserRouter([
    { element: <NavLayout /> , children:[
        { path : "/" , element : <Home /> , loader : recentLoader}
    ] }
])