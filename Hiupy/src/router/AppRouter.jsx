import { createBrowserRouter } from "react-router-dom";
import { Home, LoadingPage, ErrorPage, Login, Register, RecipesCard, Frescos, Congelados, Secos, Huerta, CategoriesMain } from "../pages";
import { RecipesContainer } from "../pages/Recetas";

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
        path: "/Home",
        element: <Home/>,
    },
    //Inventario / Categorías
    {
        path: "/Categories",
        element: <CategoriesMain/>, 
    },
    {
        path: "/Congelados",
        element: <Congelados/>,
    },
    {
        path: "/Frescos",
        element: <Frescos/>,
    },
    {
        path: "/Secos",
        element: <Secos/>, 
    },
    {
        path: "/Huerta",
        element: <Huerta/>, 
    },


    //Recetas
    {
        path: "/Recipes",
        element: <RecipesContainer/>,
    },
    {
        path: "/RecipeCard",
        element: <RecipesCard/>,
    },
]);