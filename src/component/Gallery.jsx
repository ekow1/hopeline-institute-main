import React ,{useEffect} from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import {imageUrls} from "./data/gallery.js";
import {FiArrowUpRight} from "react-icons/fi";


const Gallery = () => {


    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: 'ease-in-out'
        });
    }, []);


    return (
        <div className='w-full min-h-screen flex flex-col  '>
            <div className=" w-[100%]  py-16 flex flex-col items-center  justify-center lg:px-52 text-white">
                <div className='flex flex-col justify-center lg:items-start items-center'>
                    <span
                        className="flex items-center justify-center gap-3  mb-2  lg:text-2xl  font-thin"> <FiArrowUpRight/> Gallery</span>
                    <h1 className=" lg:text-7xl text-sm font-bold font-serif leading-loose">A Showcase of Hopelines' Impactful Solutions</h1>
                </div>


            </div>
            <div
                className="w-full h-[100%] grid grid-cols-1 md:grid-cols-3 gap-4 px-8 py-20 lg:py-20 lg:px-16 bg-white">
                {imageUrls.map((imageUrl, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg">

                        <div
                            className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <img
                            className="object-cover w-full h-full rounded-lg transition-transform duration-300 transform group-hover:scale-105  cursor-pointer hover:opacity-75 "
                            src={imageUrl.img} alt={imageUrl.title} data-aos="fade-zoom-in"
                            loading="lazy"
                            data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"/>
                        <div
                            className="absolute inset-0 flex flex-col items-start justify-end text-white text-center pointer-events-none  ">
                            <h2 className="text-xl   bg-black px-5 py-2 rounded-tr-lg">{imageUrl.title}</h2>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
