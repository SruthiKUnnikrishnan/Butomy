import React, { createContext, useEffect, useState } from "react";



export const ShopContext= createContext(null);
const ShopContextProvider=(props)=>{
    // const contextValue={all_products};
    const [authProduct,setAuthProduct] = useState([])

    /////To get products/////////////
    useEffect(()=>{

        async function getAllProducts()
        {
            await fetch(`https://dummyjson.com/products/category/furniture`)
            .then(response=>response.json())
            .then(response=>{
               
                setAuthProduct(response)
               
            })
        }
        getAllProducts()
    },[])
const contextValue=authProduct
 
    return(
        <ShopContext.Provider value={[authProduct,setAuthProduct] } >
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
