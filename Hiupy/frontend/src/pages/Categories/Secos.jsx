import { useContext } from "react";
import { Footer, NavBar, Product, AddProdButton } from "../../components";
import InventoryContext from "../../context/Inventory/InventoryContext";

export const Secos = () => {
    const { loading, error, getProductosSecos } = useContext(InventoryContext);
    const productosSecos = getProductosSecos();
    // console.log(productosSecos);
    return (
        <div>
            <NavBar />
            <h2 className="text-md mt-4 text-center font-semibold">
                Alimentos Secos
            </h2>
            <div className="relative flex flex-col h-[50vh] gap-6 my-9 w-11/12 md:w-5/12 lg:w-4/12 xl:w-3/12 mt-10 lg:mt-24 mx-auto">
                {" "}
                {!loading & !error
                    ? productosSecos.map((producto) => (
                          <Product
                              key={producto.id_product}
                              product={producto}
                          />
                      ))
                    : error && (
                          <>
                              <h2>
                                  Lo sentimos, parece que ha ocurrido un error
                              </h2>
                          </>
                      )}
            <div className="absolute bottom-0 right-0">
                <AddProdButton />
            </div>
            </div>

            <Footer />
        </div>
    );
};
