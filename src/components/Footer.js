import React from "react";
 function Footer(){
    return(
        <>
        <footer className="border-y-2 py-12 mt-16 px-20">
           
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
       
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Funiro.</h2>
          <p className="text-gray-600 ">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </p>
        </div>

        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-600">Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-black-600 hover:underline">Home</a></li>
            <li><a href="/" className="text-black-600 hover:underline">Shop</a></li>
            <li><a href="/" className="text-black-600 hover:underline">About</a></li>
            <li><a href="/" className="text-black-600 hover:underline">Contact</a></li>
          </ul>
        </div>

       
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-600">Help</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-black-600 hover:underline">Payment Options</a></li>
            <li><a href="/" className="text-black-600 hover:underline">Returns</a></li>
            <li><a href="/" className="text-black-600 hover:underline">Privacy Policies</a></li>
          </ul>
        </div>

       
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-600">Newsletter</h3>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-2 py-2 border-b border-gray-300  focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white border-b text-black px-4 py-2  "
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      
      <div className="mt-8 border-t pt-6 text-start">
        <p className="text-black-600">&copy; 2023 Funiro. All rights reserved.</p>
      </div>
    </footer>
        </>

    )
 }
 export default Footer