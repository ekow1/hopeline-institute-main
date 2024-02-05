import Accordion from "../subcomponent/Accordion.jsx";
import Button from "../subcomponent/Button.jsx";
import {FiArrowUpRight} from "react-icons/fi";
import {NavLink} from "react-router-dom";

const Services = () => {
    return (


        <div className=" w-full h-auto bg-white grid grid-cols-1 lg:grid-cols-2 lg:px-10  gap-5 place-items-center py-16  lg:py-28 ">
            <div className="  lg:w-[90%] h-[400px] lg:h-[700px] px-5 lg:px-20 lg:py-20  ">
                <span className="flex items-center justify-start gap-3 lg:text-2xl  font-thin"> <FiArrowUpRight /> Our  Services</span>
                <h1 className=" text-2xl lg:text-5xl font-semibold font-serif mb-10">Our Tailored Services for Strategic Excellence</h1>
               <p className=" mb-10 lg:mb-28">

                At Hopeline, we offer a comprehensive suite of services designed to meet the diverse needs of businesses across various industries. Our strategic approach and tailored solutions ensure that your business not only adapts to challenges but thrives in today's dynamic marketplace.


               </p>


             <NavLink to='/services'>

                <Button  content="view all services"/>
             </NavLink>
            </div>
            <div className=" h-auto flex lg:items-center lg:justify-start lg:w-[90%]  lg:-[700px] px-3 lg:px-5  ">
                <Accordion />
            </div>


        </div>
    )
}


export default Services