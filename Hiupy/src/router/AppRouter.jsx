import { createBrowserRouter } from "react-router-dom";
import { Home, LoadingPage, ErrorPage, Login, Register, RecetasContainer } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoadingPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/Login",
        element: <Login />,
    },
    {
        path: "/Register",
        element: <Register/>,
       
    },
    {
        path: "/home",
        element: <Home/>,
        //Se encarga de redireccionar a la página de error cuando no encuentra la URL.
        errorElement:<ErrorPage/>

    },
    {
        path: "/recetas",
        element: <RecetasContainer/>
    }
]);