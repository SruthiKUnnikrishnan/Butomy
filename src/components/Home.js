import React, { useState } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import Products from './Products'
import browseimg1 from '../assets/browseimg1.png'
import browseimg2 from '../assets/browseimg2.png'
import browseimg3 from '../assets/browseimg3.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import slide1 from '../assets/slide1.png'
import slide2 from '../assets/slide2.png'
import slide3 from '../assets/slide3.png'



function Home() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? 2 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const handleNext = () => {
      const isLastSlide = currentIndex === 2;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
    return (
        <>
            <NavBar />
            <Banner />

            {/* Browse the range section */}
            <div className="container mx-auto p-6 px-20">
                <h2 className="text-3xl font-bold mb-2 text-center">Browse the range</h2>

                <p className="text-gray-600 text-center mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="rounded-lg overflow-hidden">
                        <img
                            src={browseimg1}
                            alt="Dining"
                            className="w-full h-[480px] object-cover  rounded-lg"
                        />
                        <div className="text-center p-4">
                            <h3 className="text-lg font-semibold">Dining</h3>
                        </div>
                    </div>


                    <div className="rounded-lg overflow-hidden ">
                        <img
                            src={browseimg2}
                            alt="Living"
                            className="w-full h-[480px] object-cover rounded-lg"
                        />
                        <div className="text-center p-4">
                            <h3 className="text-lg font-semibold">Living</h3>
                        </div>
                    </div>


                    <div className="rounded-lg overflow-hidden ">
                        <img
                            src={browseimg3}
                            alt="Bedroom"
                            className="w-full h-[480px] object-cover rounded-lg"
                        />
                        <div className="text-center p-4">
                            <h3 className="text-lg font-semibold">Bedroom</h3>
                        </div>
                    </div>
                </div>
            </div>

            <Products />

            <div className="bg-custom-white py-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                   
                    <div className="space-y-6 pl-28 pr-16">
                        <h1 className="text-4xl font-bold text-gray-900">
                            50+ Beautiful rooms inspiration
                        </h1>
                        <p className="text-gray-600">
                            Our designer already made a lot of beautiful prototypes of rooms that inspire you.
                        </p>
                        <button className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700 transition duration-300">
                            Explore More
                        </button>
                    </div>

                    
                    <div className="relative w-full h-full">
                        <div className="flex items-center justify-center relative overflow-hidden">
                            
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * (100 / 2.5)}%)` }}  
                            >
                                
                                <div
                                    className={`flex-shrink-0 w-64 md:w-1/3 relative p-2 transition-transform duration-300 ease-in-out ${currentIndex === 0 ? 'transform scale-110' : 'transform scale-90'
                                        }`}
                                >
                                    <img
                                        src={slide1}
                                        alt="img"
                                        className="w-full h-[350px] object-cover rounded-lg"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 rounded">
                                        <span className="block text-sm text-gray-500">01 — Bed Room</span>
                                        <span className="block text-lg font-bold text-gray-900">Inner Peace</span>
                                    </div>
                                </div>

                               
                                <div
                                    className={`flex-shrink-0 w-64 md:w-1/3 relative p-2 transition-transform duration-300 ease-in-out ${currentIndex === 1 ? 'transform scale-110' : 'transform scale-90'
                                        }`}
                                >
                                    <img
                                        src={slide2}
                                        alt="img"
                                        className="w-full h-[350px] object-cover rounded-lg"
                                    />
                                    
                                </div>

                              
                                <div
                                    className={`flex-shrink-0 w-64 md:w-1/3 relative p-2 transition-transform duration-300 ease-in-out ${currentIndex === 2 ? 'transform scale-110' : 'transform scale-90'
                                        }`}
                                >
                                    <img
                                        src={slide3}
                                        alt="img"
                                        className="w-full  h-[350px] object-cover rounded-lg"
                                    />
                                    
                                </div>
                            </div>

                         
                         
                            <button
                                onClick={handlePrev}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
                            >
                                &#10094;
                            </button>

                           
                           
                            <button
                                onClick={handleNext}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
                            >
                                &#10095;
                            </button>
                        </div>

                       
                       
                        <div className="flex justify-center mt-4">
                            <button
                                className={`h-3 w-3 rounded-full mx-2 ${currentIndex === 0 ? 'bg-yellow-600' : 'bg-gray-400'}`}
                                onClick={() => goToSlide(0)}
                            ></button>
                            <button
                                className={`h-3 w-3 rounded-full mx-2 ${currentIndex === 1 ? 'bg-yellow-600' : 'bg-gray-400'}`}
                                onClick={() => goToSlide(1)}
                            ></button>
                            <button
                                className={`h-3 w-3 rounded-full mx-2 ${currentIndex === 2 ? 'bg-yellow-600' : 'bg-gray-400'}`}
                                onClick={() => goToSlide(2)}
                            ></button>
                        </div>
                    </div>
                </div>
            </div>





            <div className="container mx-auto ">
                <h1 className=" font-bold text-center my-8">
                    Share your setup with<br /> <span className="text-3xl text-black-600">#FuniroFurniture</span>
                </h1>

                {/* Custom Grid Layout */}
                <div className="grid grid-cols-12 gap-4">
                    {/* Item 1 - Full width on small, 2 columns on large */}
                    <div className="col-span-6 md:col-span-3 row-span-1">
                        <img
                            src={img3}
                            alt="Furniture 1"
                            className="w-full   shadow-md"
                        />
                    </div>

                    {/* Item 2 - Full width on small, 1 column on large */}
                    <div className="col-span-6 md:col-span-3 row-span-2 mt-20">
                        <img
                            src={img9}
                            alt="Furniture 2"
                            className="w-full h-[335px]  shadow-md"
                        />
                    </div>

                    {/* Item 3 - 1 column on large, small on small */}
                    <div className="col-span-6 md:col-span-2 mt-32">
                        <img
                            src={img8}
                            alt="Furniture 3"
                            className="w-full h-auto  shadow-md"
                        />
                    </div>
                    <div className="col-span-6 md:col-span-2">
                        <img
                            src={img4}
                            alt="Furniture 3"
                            className="w-full h-[260px]  shadow-md"
                        />
                    </div>

                    {/* Item 4 - 2 columns on large */}
                    <div className="col-span-6 md:col-span-2">
                        <img
                            src={img2}
                            alt="Furniture 4"
                            className="w-full h-auto  shadow-md"
                        />
                    </div>

                    {/* Item 5 - 2 columns on large */}
                    <div className="col-span-6 md:col-span-2 mt-[-48px]">
                        <img
                            src={img1}
                            alt="Furniture 5"
                            className="w-full h-auto  shadow-md"
                        />
                    </div>

                    {/* Item 6 */}


                    {/* Item 7 */}
                    <div className="col-span-6 md:col-span-2">
                        <img
                            src={img7}
                            alt="Furniture 7"
                            className="w-full h-auto  shadow-md"
                        />
                    </div>
                    <div className="col-span-6 md:col-span-2">
                        <img
                            src={img6}
                            alt="Furniture 6"
                            className="w-full h-auto  shadow-md"
                        />
                    </div>
                    {/* Item 8 */}
                    <div className="col-span-6 md:col-span-2 ">
                        <img
                            src={img5}
                            alt="Furniture 8"
                            className="w-full h-auto  shadow-md"
                        />
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Home