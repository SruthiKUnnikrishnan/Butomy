import React from "react";
import logo from "../assets/logo.png"
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";




function NavBar() {
    return (
        <>
            <nav>
                <div className="fixed  top-0 left-0 right-0 z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-20 bg-white shadow-sm border-gray-300 	">
                    <div className="flex justify-between h-28">
                        <div className="text-black flex-shrink-0 flex items-center text-2xl font-bold">
                            <img src={logo} alt="logo" className="h-16" />
                            <a href="/" className="text-Black-600 text-4xl"  >Furniro</a>
                        </div>
                        <ul className="flex space-x-20 items-center">
                            <li><a href="/" className="text-black-600 text-lg font-medium	">Home</a></li>
                            <li><a href="/" className="text-black-600 text-lg font-medium	">Shop</a></li>
                            <li><a href="/" className="text-black-600 text-lg font-medium	">About</a></li>
                            <li><a href="/" className="text-black-600 text-lg font-medium	">Contact</a></li>
                        </ul>
                        <div className="flex items-center space-x-8">
                            <a href="/" className="text-black text-xl ">
                                <FaRegUser />
                            </a>
                            <a href="/" className=" text-black  text-2xl" >
                                <IoSearch />
                            </a>
                            <a href="/" className=" text-black  text-2xl" >
                                <FaRegHeart />
                            </a>
                            <a href="/cart" className=" text-black  text-2xl" >
                                <LuShoppingCart />
                            </a>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}
export default NavBar