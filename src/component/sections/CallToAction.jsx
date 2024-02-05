import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hope from '../../assets/hope-1.jpg';
import Button from '../subcomponent/Button.jsx';

const CallToAction = () => {
    return (
        <div
            className='w-full h-[300px] text-white flex lg:flex flex-col items-center  bg-cover bg-right-top bg-no-repeat justify-center bg-white'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),url(${Hope})`,
            }}
        >
            <div className=" w-full lg:w-[80%] b flex flex-col lg:flex-row items-center lg:justify-between gap-5  md:w-[50%] mt-16 mb-16">
                <div className="flex flex-col items-start justify-start lg:justify-start">
                    <h1 className='font-bold text-4xl lg:text-6xl mb-3'>
                        For more information
                    </h1>
                    <p className='text-sm lg:text-lg '>
                        About the services we provide and collaboration
                    </p>
                </div>
                <Link to='/contact'>
                    <Button content='Get In Touch' />
                </Link>
            </div>
        </div>
    );
};

export default CallToAction;
