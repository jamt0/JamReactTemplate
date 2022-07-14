import * as pages from "pages";
import namesRoutes from "routes/namesRoutes";

const routes = [
    {
        path: namesRoutes.signIn,
        component: pages.SignIn
    },
    {
        path: namesRoutes.home,
        component: pages.Home
    }
]

export default routes;
