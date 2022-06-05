import Module from "./Module";
import Home from "./views/Home";

const moduleRoute = {
    path: "/post",
    component: Module,
    children: [
        {
            path: "/",
            component: Home
        }
    ]
}

export default router => {
    router.addRoute(moduleRoute);
};
