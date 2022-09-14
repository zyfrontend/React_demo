import NotFound from "@/views/NotFound"
import Home from "@/views/Home"
export const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '*',
        element: <NotFound />,
        meta: {
            title: '404',
            noLogin: true,
            hideMenu: true
        }
    },
];

export default routes;