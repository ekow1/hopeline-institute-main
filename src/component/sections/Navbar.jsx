import Button from "../subcomponent/Button.jsx";
import  {TopNav} from "../data/navigation.js";
import {NavLink} from "react-router-dom";
import Logo from "../../assets/logo-1.png";

function Navbar() {
    return (
        <>
            <nav className="w-full hidden lg:flex   items-center  h-[70%] gap-5 ">
                <div className=" flex flex-col items-center justify-center  h-[70%]   px-5  border-2 border-white ">

                    <img src={Logo} alt="logo" width="100%" className="h-[70%]" />
                </div>
                <div className=" h-[70%] flex flex-1 items-center justify-between   border-2 border-white  ">

                    <ul className="  h-full flex items-center justify-start gap-10 px-10  text-md">

                        {TopNav.map((item) => (

                            <NavLink to={item.link}  key={item.name}
                                     className={({ isActive, isPending, isTransitioning }) => `
                                        ${isActive ? 'font-bold border-b-2 border-green-700 text-green-500' : ''}
                                        ${isPending ? 'text-red-500' : 'text-white'}
                                        ${isTransitioning ? 'transform translate-x-4 opacity-0 duration-100' : 'transition-slide'}
                                      `}
                            >

                            <li className="nav-item"  > {item.name}</li>
                            </NavLink>

                        ))}



                    </ul>

                    <div className=" w-[20%]  h-full flex items-center justify-end px-4">
                        <NavLink to="/contact">
                        <Button content="Get In Touch"/>
                        </NavLink>
                    </div>

                </div>
            </nav>

        </>
    )
}


export default Navbar;
