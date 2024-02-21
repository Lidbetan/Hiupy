import { NavBar, SearchBar } from "../../components";
import ListaRecetas from "./ListaRecetas";

export const RecetasContainer = () => {
    return (
        <>
            <div className="container p-8">
                <h2 className="text-xs font-semibold">
                    Estas son las recetas sugeridas con los ingredientes que
                    tenés en casa
                </h2>
                <SearchBar/>
                <ListaRecetas/>
                <NavBar/>
            </div>
        </>
    );
};
