import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import {logoUrls} from "../data/gallery.js";

const Partners = () => {
    return (
        <div className="w-full h-auto lg:h-[500px] flex lg:flex flex-col items-center justify-center lg:bg-white bg-slate-300">

            <div className="w-full lg:w-[60%] h-[40%] flex items-center justify-center lg:flex-row flex-col mt-16 mb-16">
                <div className="w-full lg:w-[20%] h-auto lg:h-[100%] flex items-center justify-center lg:border-2 border-gray-200 lg:border-e-0 font-serif font-bold mb-5 lg:mb-0">

                    <FiArrowUpRight size={80} />
                    <h1 className="text-2xl"> Our Trusted Partners </h1>

                </div>
                <div className="w-full  lg:w-[80%] h-auto lg:h-[100%] flex flex-col lg:flex-row  items-center justify-center lg:border-2 border-gray-300 p-5   lg: bg-slate-300 gap-10  ">

                    {logoUrls.map((logoUrl) => (
                        <img src={logoUrl.img} alt={logoUrl.title} width={150} height={150}  key={logoUrl.title} />

                    ))}

                </div>
            </div>
        </div>
    );
};

export default Partners;
