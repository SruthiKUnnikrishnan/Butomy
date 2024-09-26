import React from 'react'
import cart from '../assets/cart.jfif'
import logo from '../assets/logo.png'
import { MdDelete } from "react-icons/md";
import cart2 from '../assets/cart2.png'

function Cart() {
    return (
        <>
            <div className=" min-h-screen py-28">
                <div className="relative w-full h-64">
                    <img
                        src={cart}
                        alt="Cart Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-center">
                    <img
                        src={logo}
                        alt="logo"
                        className=" h-20 mb-[-20px]"
                    />
                        <h1 className="text-black text-4xl font-bold">Cart</h1>
                        <p>Home>Cart</p>
                    </div>
                </div>

                <div className="container mx-auto py-4 px-28">
                    <p className="text-gray-600">
                        Home &gt; <span className="text-black">Cart</span>
                    </p>
                </div>

                <div className="container mx-auto px-28 pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="col-span-2 bg-white  rounded-lg p-6">
                            <table className="min-w-full table-auto">
                                <thead>
                                    <tr className="bg-custom-white">
                                        <th className="text-left px-6 py-4 font-bold text-gray-700">Product</th>
                                        <th className="text-left px-6 py-4 font-bold text-gray-700">Price</th>
                                        <th className="text-left px-6 py-4 font-bold text-gray-700">Quantity</th>
                                        <th className="text-left px-6 py-4 font-bold text-gray-700">Subtotal</th>
                                        <th className="text-left px-6 py-4 font-bold text-gray-700"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="">
                                        <td className="px-6 py-4 flex items-center">
                                            <img
                                                src={cart2}
                                                alt="Product"
                                                className="w-16 h-16 object-cover rounded-lg mr-4"
                                            />
                                            <span className="font-medium text-gray-400">Asgaard sofa</span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-400">Rs. 250,000.00</td>
                                        <td className="px-6 py-4">
                                            <input
                                                type="number"
                                                value="1"
                                                className="w-16 border border-gray-300 rounded-md px-2 py-1"
                                            />
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">Rs. 250,000.00</td>
                                        <td className="px-6 py-4">
                                            <button className="text-custom-yellow hover:text-red-700">
                                            <MdDelete />

                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-custom-white  h-72 p-6 px-20">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Cart Totals</h2>
                            <div className="space-y-9">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="text-gray-800">Rs. 250,000.00</span>
                                </div>
                                <div className="flex justify-between ">
                                    <span className="text-gray-600">Total</span>
                                    <span className="text-yellow-500 font-bold">Rs. 250,000.00</span>
                                </div>
                                <button className="w-full border-2  border-black text-black py-3 rounded-md font-semibold ">
                                    Check Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart