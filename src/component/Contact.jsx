import React ,{useEffect} from 'react'
import {TiSocialLinkedin, TiSocialFacebook, TiSocialInstagram, TiMail, TiPhone, TiLocation} from 'react-icons/ti';


import AOS from 'aos';
import 'aos/dist/aos.css';
import Form from "./subcomponent/Form.jsx";
import {FiArrowUpRight} from "react-icons/fi";
const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: 'ease-in-out'
        });
    }, []);
    return (
        <div className='w-full h-auto flex flex-col   '>
            <div className=" w-[100%]  py-16 flex flex-col items-center  justify-center lg:px-52 text-white">
                <div className='flex flex-col justify-center items-start'>
                    <span
                        className="flex items-center justify-center gap-3    lg:text-2xl  font-thin"> <FiArrowUpRight/> Get In Touch</span>
                <h1 className=" lg:text-8xl text-sm font-bold font-serif leading-loose">Connecting for Success </h1>
                </div>


            </div>
            <div
                className="w-full h-[60%] grid grid-cols-1 md:grid-cols-2   justify-center   gap-4 px-8 py-5 lg:py-5 lg:px-16 bg-white">
                <div className=" flex flex-col items-center  justify-center lg:justify-start lg:mt-24">
                    <div
                        className=' w-full lg:w-[60%] flex flex-col justify-center items-start text-md gap-4 px-5  mt-10 '>
                        <h1 className='border-b-2 border-black font-serif font-bold text-xl lg:text-5xl'
                            data-aos='fade-in'>Lets Talk</h1>
                        <p data-aos='fade-right'>We'd love to hear from you! Whether you have a question about our
                            services, want to discuss a potential collaboration, or just want to say hello, our team is
                            ready to connect with you.</p>

                    </div>
                    <div
                        className='w-full lg:w-[60%] flex flex-col justify-center items-start lg:text-xl gap-8 px-5 py-5  mt-10   '
                        data-aos='fade-up'>
                        <p className='flex items-center gap-2'>

                            <TiPhone size={30}/> +233 541-683-525
                        </p>
                        <p className='flex items-center gap-2'>
                            <TiPhone size={30}/> +233 553-077-308
                        </p>
                        <p className='flex items-center gap-2'>
                            <TiMail size={30}/> info@hopelineinstitute.org
                        </p><p className='flex items-center gap-2'>
                        <TiLocation size={30}/> No.72 Boundary Road ,Social Welfare Madina
                    </p>

                        <ul className='flex items-center gap-5 '>
                            <li>
                                <TiSocialFacebook size={30}/>
                            </li>
                            <li>
                                <TiSocialInstagram size={30}/>
                            </li>
                            <li>
                                <TiSocialLinkedin size={30}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" flex flex-col items-center justify-center lg:justify-start py-10"
                     data-aos='fade-zoom-in'>
                    <Form/>

                </div>

            </div>
        </div>
    )
}

export default Contact