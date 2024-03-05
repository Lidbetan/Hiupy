/* eslint-disable react/prop-types */
import IngridientsContext from "./IngridientsContext";
import useApiData from "../../Hooks/useApiData";

const IngridientsContextProvider = ({children}) => {
    const [data, loading, error] = useApiData(
        "http://localhost:3000/api/recipes/1"
    );

    const values = {
        data,
        loading,
        error,
    };

    return (
        <>
            <IngridientsContext.Provider value={values}>
                {children}
            </IngridientsContext.Provider>
        </>
    );
};

export default IngridientsContextProvider