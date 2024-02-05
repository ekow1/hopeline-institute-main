import Button from "./subcomponent/Button.jsx";
import {GiEternalLove} from "react-icons/gi";
import Navbar from "./sections/Navbar.jsx";
import {FiClock, FiMail} from "react-icons/fi";

const Navigation = () => {
    return (
        <div className="mx-auto  h-[150px] w-[70%] hidden lg:flex flex-col items-center justify-center text-white px-5 ">
            <div className=" h-[20%] flex items-center justify-between w-full  ">
                <div className=" w-[30%] h-full  flex items-center gap-1 text-sm" >
                    <h1>Logo -  </h1>
                    <p>  Empowering Success, Unleashing Potential </p>
                </div>
                <div className=" lg:w-[30%] h-full  flex items-center  justify-end  gap-2 text-sm   " >

                    <p className= " flex items-center justify-end gap-1"> <FiClock /> Mon-Fri: 8:00 AM - 5:00 PM </p>
                    <p className="  flex items-center justify-end gap-1"> <FiMail/> info@hopelineinstitute.org</p>
                </div>

            </div>
           <Navbar />
        </div>
    )
 }

 export default Navigation

