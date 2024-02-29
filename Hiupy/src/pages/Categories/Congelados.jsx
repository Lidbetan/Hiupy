import { useContext } from "react";
import { Footer, NavBar } from "../../components";
import ProductsContext from "../../context/Products/ProductsContext";
import { Product } from "../../components/Product/Product";

export const Congelados = () => {
    const { loading, error, getProductosCongelador } =
        useContext(ProductsContext);
    const productosCongelador = getProductosCongelador();
    // console.log(productosCongelador);
    return (
        <div>
            <NavBar />
            <h2 className="text-md mt-4 text-center font-semibold">Alimentos Congelados</h2>
            <div className="flex flex-col gap-5 my-9 w-11/12 mx-auto">
                {!loading & !error
                    ? productosCongelador.map((producto) => (
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
            </div>

            <Footer />
        </div>
    );
};
