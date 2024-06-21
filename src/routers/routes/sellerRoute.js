import { lazy } from "react";

const Home = lazy(() => import("../../views/home"));

export const sellerRoutes = [
    {
        path: '/',
        element: <Home />,
        ability: ['ADMIN', 'SHOP']
    }
]