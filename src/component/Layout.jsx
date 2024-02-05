import { Outlet } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import fanny from '../assets/hope-4.jpg';
import MobileNav from "./MobileNav.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {
    return (
        <div className='w-full flex flex-col h-auto bg-black bg-cover  bg-top  bg-no-repeat  overflow-hidden' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%),url(${fanny})` }}>
            <Navigation />
            <MobileNav />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
