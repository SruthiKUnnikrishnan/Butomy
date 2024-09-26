import React, { useState, useEffect } from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

function Products() {
    const [products, setProducts] = useState([]);
    //   const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getAllProducts() {
            try {
                const response = await fetch(`https://dummyjson.com/products/category/furniture`);
                const data = await response.json();

                // Set the products from the fetched data
                setProducts(data.products); // Accessing the 'products' array inside the response
                // setLoading(false);
            } catch (error) {
                console.error("Error fetching the product data:", error);
                // setLoading(false);
            }
        }

        getAllProducts();
    }, []);

    return (
        <>
            <div className="container mx-auto p-6 px-20">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="relative group border shadow-lg p-4 bg-white hover:shadow-xl transition-shadow duration-300">
                        <div className="overflow-hidden">
                        <div className="absolute top-4 right-2 bg-red-500 text-white text-xs font-bold p-1 rounded-xl">
                            {product.discountPercentage ? `-${Math.round(product.discountPercentage)}%` : 'New'}
                          </div>
                          <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full  object-cover mb-4  group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 "></div>
                        </div>
                        <div className="absolute inset-0 flex  flex-col items-center justify-center opacity-0 group-hover:opacity-100 ">
                            <button className="bg-yellow-600 text-white py-2 px-4 rounded mb-2" >Add to Cart</button>
                            <div className="flex space-x-6">
                              <button className="text-white flex flex-row items-center justify-center "><IoShareSocialSharp />Share</button>
                              <button className="text-white flex flex-row items-center justify-center"><MdCompareArrows />Compare</button>
                              <button className="text-white flex flex-row items-center justify-center"><FaRegHeart />Like</button>
                            </div>
                          </div>
                        <div className="relative">
                          <h2 className="text-lg font-bold mb-2">{product.title}</h2>
                          <p className="text-gray-600 mb-2">
                            Rp {product.price}
                          </p>
                          
                          
                          
                        </div>
                      </div>
                    ))}
                </div>
                <div className="text-center mt-6">
                    <button className="border border-yellow-600 text-yellow-600 py-2 px-4 rounded">Show More</button>
                </div>
            </div>
        </>
    )
}
export default Products