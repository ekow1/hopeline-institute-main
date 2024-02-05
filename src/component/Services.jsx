import React ,{useEffect} from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import {accordionData} from './data/services.js'
import {FiArrowUpRight} from "react-icons/fi";

const Services = () => {



    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: 'ease-in-out'
        });
    }, []);


    return (
        <div className='w-full min-h-screen flex flex-col  ' >
            <div
                className="w-full h-80 flex flex-col items-center justify-center  bg-cover bg-center bg-no-repeat ">

                <div className=" w-[80%]  py-10 flex flex-col items-start  justify-start lg:px-52 text-white">
                    <span
                        className="flex items-center justify-start gap-3    lg:text-2xl  font-thin"> <FiArrowUpRight/> our services</span>
                    <h1 className=" lg:text-6xl text-sm font-bold font-serif leading-loose">Elevating Your Business Potential through </h1>
                    <h1 className=" lg:text-6xl text-sm font-bold font-serif mt-2"> Tailored Training Solutions</h1>

                </div>
            </div>

            <div className=" w-full h-auto bg-white flex flex-col px-5 lg:px-10 ">

                <div className=" w-full  py-10 flex flex-col items-start gap-2 justify-start lg:px-52 mt-5 ">
                    <span
                        className="flex items-center justify-start gap-3   lg:text-xl  font-thin"> <FiArrowUpRight/> Solution Approach</span>
                    <h1 className=" lg:text-5xl text-3xl font-bold">Our Tailored Services for Strategic Excellence</h1>
                    <p>At Hopeline, we offer a comprehensive suite of services designed to meet the diverse needs of
                        businesses across various industries. Our strategic approach and tailored solutions ensure that
                        your business not only adapts to challenges but thrives in today's dynamic marketplace.</p>
                </div>

                <div
                    className="w-full  h-[100%]  grid grid-cols-1 md:grid-cols-3 lg:gap-2 gap-10 py-20 lg:py-24 lg:px-16 place-items-center  ">

                    {accordionData.map((item) => (
                        <div key={item.id} className=" lg:w-[500px] h-[300px] flex flex-col  justify-start lg:gap-5 ">
                            <h1 className='font-bold lg:text-xl mb-2 '> <span className= " bg-slate-800 text-white p-1 lg:p-2 text-2xl rounded-lg">{item.num}</span> {item.title}</h1>
                            <p className=" text-justify">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
