import Button from "../subcomponent/Button.jsx";
import {FiArrowUpRight} from "react-icons/fi";
import {NavLink} from "react-router-dom";

const About = () => {
    return (
        <div
            className="w-full lg:h-[250px] bg-white flex flex-col lg:flex-row  overflow-hidden mt-20 lg:px-16 py-5 lg:py-2">
            <div
                className="w-[90%] mx-auto h-auto flex flex-col items-center justify-center gap-5 lg:gap-0 lg:flex-row lg:justify-between lg:mt-20 ">
                <div className="w-full lg:w-[40%] ">
                    <div className="flex flex-col gap-3 mb-5">
                        <span className="flex items-center justify-start gap-1 lg:text-2xl  font-thin"> <FiArrowUpRight/> About us</span>
                        <h1 className="font-serif font-bold text-4xl lg:text-4xl">Empowering Business Success: Unveiling
                            the Hopeline Story</h1>
                    </div>
                </div>
                <div
                    className=" w-full lg:w-[55%] flex flex-col items-start justify-center   gap-5  lg:border-s  border-black lg:px-16 lg:py-5  ">
                    <p className="lg:text-xl  font-thin">
                        Embark on a transformative journey with Hopeline, where expert consulting meets innovative solutions, propelling your business to unprecedented success.</p>

                    <NavLink to='/about'>
                    <Button content="know more about us"/>
                    </NavLink>
                </div>
            </div>
        </div>

    )
}


export default About;