
import {FiArrowUp, FiArrowUpRight} from "react-icons/fi";
import Fanny from "../../assets/fanny.jpg";
import Button from "../subcomponent/Button.jsx";
import {NavLink} from "react-router-dom";
const Hero = () => {
    return (
        <div className="w-full flex flex-col gap-y-28 h-auto lg:mt-28">
            <div className="container mx-auto flex flex-col lg:items-start lg:justify-start px-5  lg:px-10 ">
                <p className="capitalize text-white text-sm lg:text-lg xl:text-xl mb-2">innovate . transform . thrive </p>
                <div
                    className="w-full flex flex-col h-auto justify-start items-start  text-white   gap-5   lg:gap-5">
                    <h1 className="text-3xl lg:text-5xl xl:text-6xl font-serif font-bold">Tailored Solution For
                        Every</h1>
                    <h1 className="text-3xl lg:text-5xl xl:text-6xl font-serif font-bold">Business Challenge</h1>

                    <p className=' flex   items-center gap-5  lg:w-[800px] lg:text-xl text-start px-2 mt-5'>
                         <span className="transform hover:rotate-45 transition-transform duration-300">
              <FiArrowUpRight size={80}/>
            </span>
                        Unlock the full potential of your business with Hopeline – where strategic expertise meets innovative solutions.

                    </p>
                </div>
            </div>

            <div className="container mx-auto h-auto grid grid-cols-1 lg:grid-cols-2  gap-8 text-white  lg: px-5">
                <img className=" h-auto"  alt='' src={Fanny} />
                <div className=" w-full flex flex-col h-auto  items-start gap-10  lg:gap-8 lg:px-10">
                    <p className=" lg:mb-20">
                        At Hopeline, we believe in the power of businesses to achieve greatness. Our seasoned team of consultants is dedicated to guiding you on the path to success, offering tailored solutions that drive growth and innovation.At Hopeline, we believe in the power of businesses to achieve greatness. Our seasoned team of consultants is dedicated to guiding you on the path to success, offering tailored solutions that drive growth and innovation.
                    </p>
                    <NavLink to='/services'>
                    <Button content="our services" />
                    </NavLink>
                </div>
            </div>

        </div>
    );
}

export default Hero;
