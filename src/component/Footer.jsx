import React from 'react'

import { TiSocialLinkedin, TiSocialFacebook, TiSocialInstagram, TiMail, TiPhone } from 'react-icons/ti';

import Navbar from "./sections/Navbar.jsx";
import MobileNav from "./MobileNav.jsx";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='w-full  h-[300px] flex flex-col  items-center  justify-center  text-white  bg-blue-950'
        >
            <div className=" w-full lg:w-full  lg:h-full   flex flex-col lg:flex-col  items-center justify-center  ">
                <div className=" w-full lg:w-[60%] lg:h-[100%] flex flex-col  items-center justify-center gap-10 lg:gap-0 lg:flex-col  lg:justify-between px-5 py-12 ">

                      <div className=" w-full h-[100%] flex  flex-col items-center justify-center">

                        <Navbar />
                        {/*<MobileNav />*/}
                          <ul className= "w-full flex lg:hidden items-center justify-center  gap-5 px-5 ">
                              <li>about</li>
                              <li>services</li>
                              <li>contact</li>
                          </ul>
                      </div>



                    <div className=" w-full  lg:w-[100%] lg:h-[50%]   lg:text-md  flex flex-col lg:flex-row items-center  justify-between gap-10       ">


                        <ul className="flex items-center gap-5  ">
                            <li>
                                <TiSocialFacebook size={20} />
                            </li>
                            <li>
                                <TiSocialInstagram size={20} />
                            </li>
                            <li>
                                <TiSocialLinkedin size={20} />
                            </li>
                        </ul>
                        <p className=' lg:text-xl'> <span className='font-bold text-2xl '> &copy;</span> {currentYear}  All rights reserved.</p>



                    </div>
                </div>
            </div>

        </div>
    )

}

export default Footer