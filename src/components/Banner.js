import React from "react";
import banner from "../assets/banner.jpg"
function Banner() {
    return (
        <>
            <container className="flex justify-between items-center  ">
                <div className="w-full relative h-auto  items-center">
                    <img src={banner} alt="banner" className="object-cover " />
                    <div className="absolute inset-0 mt-16 flex items-center justify-end p-16">
                        <div className="w-1/2 bg-amber-50 p-12 rounded-lg">
                            <p className=" font-semibold ">New Arrival</p>
                            <h1 className="text-6xl text-custom-yellow font-bold mt-2">Discover Our <br/> New Collection</h1>
                            <p className="text-black-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br/> elit tellus, luctus nec ullamcorper mattis.</p>
                            <button className="bg-custom-yellow text-white font-bold py-6 px-16 mt-6 ">BUY NOW</button>
                        </div>
                    </div>
                </div>
            </container>
        </>
    )
}
export default Banner