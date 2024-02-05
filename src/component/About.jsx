import React , {useEffect} from 'react'
// import Image from '../image/farm.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Actioncall from './sections/Actioncall'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { AboutSlide } from '../constants/data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import { FreeMode, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Values from "./subcomponent/Values.jsx";
import {FiArrowUpRight} from "react-icons/fi";

const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: 'ease-in-out'
        });
    }, []);

    return (
        <div className='w-full min-h-screen flex flex-col items-center  justify-center  '>

            <div className=" w-[100%]  py-16 flex flex-col items-center  justify-center lg:px-52 text-white">
                <div className=' px-5 flex flex-col justify-center items-center lg:items-start '>
                    <span
                        className="flex items-center justify-center gap-3  mb-2  lg:text-2xl  font-thin"> <FiArrowUpRight/> About us</span>
                    <h1 className=" lg:text-7xl text-sm font-bold font-serif leading-loose mb-3">Empowering Business Excellence: Discover </h1>
                    <h1 className=" lg:text-7xl text-sm font-bold font-serif leading-loose"> the Hopeline Difference</h1>
                </div>


            </div>

            <div
                className=" w-full   grid grid-cols-1 md:grid-cols-3  bg-white place-items-center gap-2 px-2 py-5 lg:py-5 lg:px-16">
                <div className="w-full  h-auto  lg:col-span-2  ">
                    <div
                        className=" w-full h-[100%] lg:w-[100%] lg:h-[95%] flex flex-col text-lg justify-start text-justify  gap-2 lg:gap-10  rounded-xl p-4 lg:p-16  "
                        data-aos='fade-zoom-in' data-aos-delay='5000'>
                        <h1 className=" w-[20%] font-serif font-bold lg:text-2xl uppercase border-b-2 border-black py-2">Background</h1>
                        <p className='   text-justify'>
                            Over sixteen years of hands-on work on the value chains of enterprises spanning from
                            Emerging, Micro, Small and Medium Enterprises in Manufacturing, Retail, Services and
                            Agriculture sectors of the economy, Hopeline Institute has patiently connected the dots of
                            the major pillars that make these businesses flourish into a beautiful model of Targeted
                            Business development training, Mentoring, Access to Capital, Advocacy, Intentional & Digital
                            Marketing, Micro Insurance as well as Preventive Health Education.

                        </p>
                        <p>
                            For the past years and counting, Hopeline Institute identified the need to close major
                            business gaps in service delivery in Ghana and Africa, i.e., banking the unbanked and local
                            and cross-border trade. Hence the desire of Hopeline to see technology driving financial
                            inclusion (e.g., VSLA) in unique and innovative ways.

                        </p>
                        <p>
                            To date, Hopeline Institute actively works across Ghana with one hundred and fifty-six
                            thousand, six hundred and forty-seven (156,647) Emerging, Micro, Small and Medium
                            Entrepreneurs of which 80% are women in the economic sectors of Agriculture and its value
                            chains, Retail, Services and Manufacturing.
                        </p>


                        <div
                            className=" w-full lg:mx-auto lg:w-[100%] h-auto py-5 border-8 border-green-800 inset-1 px-4 mt-10">
                            <h1 className="font-serif font-bold text-3xl mb-5 uppercase">Firm belief</h1>
                            <p className="mb-5 font-sans font-semibold ">Hopeline Institute has a firm belief in the
                                following:</p>

                            <ul className=" flex flex-col gap-10 text-md list-disc   px-5  ">
                                <li>
                                    Women contribute decisively to the well-being of their families so investing in them
                                    will bring a multiplier effect.
                                </li>
                                <li>
                                    No matter how much statisticians try, they are almost always unable to record and
                                    measure appropriately the unending activities of women in developing economies and
                                    how these activities translate into national economic growth.
                                </li>
                                <li>
                                    Governments and Institutions from onset did not engender policies that have direct
                                    bearing on the activities and livelihoods of women.
                                </li>
                                <li>
                                    Developing economies are driven by the sector managed by women; which is the
                                    informal sector where about 90% are women.
                                </li>
                            </ul>
                        </div>


                    </div>


                </div>
                <div className=" w-full lg:w-[80%] h-auto  flex  flex-col items-center  justify-start   ">
                    <Values/>

                </div>


            </div>


        </div>
    )
}

export default AboutUs