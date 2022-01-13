import Error from "../pages/Error";
import { Route, Routes } from "react-router";
import { privateRoutes, publicRoutes } from "../router/routes";
import { useContext } from "react";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth);
    if (isLoading){
        return <Loader/>
    } 
    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                <Route
                    element={route.element}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
                )}
                
            </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                <Route
                    element={route.element}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
                )}
            </Routes>
    );
};

export default AppRouter;