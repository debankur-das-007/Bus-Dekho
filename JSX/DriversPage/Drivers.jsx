import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "./Driver_footer.jsx";
import Body from "./Body.jsx";
// import "../Styles/Driver/Body.css";
import "../../CSS/Styles/Driver/Body.css";
// import "../Styles/Driver/DriversPortal.css";
import "../../CSS/Styles/Driver/DriversPortal.css";
export default function Drivers() {
    return (
        <div className='app'>
            <div className='top'>
                <Navbar />
            </div>
            <div className='mid'>
                <Body />
            </div>
            <div className='bottom'>
                <Footer />
            </div>
        </div>
    )
}