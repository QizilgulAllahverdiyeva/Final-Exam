import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({children})=>{
    const [data,setData]= useState([]);
    const [sort , setSort] = useState([]);
    const [detail , setDetail] = useState([]);

return (
    <ProductsContext.Provider 
    value={{data, setData, sort , setSort, detail,setDetail}}>
        {children}
    </ProductsContext.Provider>
)}