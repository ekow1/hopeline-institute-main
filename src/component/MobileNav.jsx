import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./subcomponent/Button.jsx";
import { TopNav} from "./data/navigation.js";
import {NavLink} from "react-router-dom";

const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative flex justify-between lg:hidden w-full h-[100px] text-white px-5 py-5">
            <h1 className="text-3xl">Logo</h1>
            <div className="menu-icon">
                <FiMenu size={30} onClick={handleMenuToggle} />
            </div>
            {isMenuOpen && (
                <nav className={`w-full fixed flex-col space-y-20 h-auto bg-blue-950 right-0 left-0 top-0 z-20 py-5 px-8 transition-opacity duration-300 opacity-100 animate-fade-down`}>
                    <div className="w-full h-[50px] flex items-center justify-between">
                        <h1 className="text-3xl">Logo</h1>
                        <AiOutlineClose
                            size={30}
                            color="white"
                            onClick={handleMenuToggle}
                            className="cursor-pointer"
                        />
                    </div>
                    <ul className=" flex flex-col items-start gap-10 mb-5 text-xl">
                        {TopNav.map((item) => (

                            <NavLink to={item.link}  key={item.name}  onClick={handleMenuToggle}
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

                    <Button content="Get In Touch" />
                </nav>
            )}
        </div>
    );
};

export default MobileNav;
