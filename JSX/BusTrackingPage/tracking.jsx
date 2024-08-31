import React, { useEffect } from "react";
import SearchContent1 from "../Body/SearchContent1";
import "../../CSS/Styles/SearchContent.css";
import "../../CSS/Styles/BusTracking/tracking.css";
import Footer from "../Footer/Footer";

export default function Tracking() {
    useEffect(() => {
        const busDetailsContainer = document.querySelector('.bus-details-container');
        let touchStartY = 0;
        let touchEndY = 0;
        const initialHeight = '50vh'; // Initial height as 50% of the viewport height
        const maxHeight = '90vh'; // Maximum height as 90% of the viewport height

        busDetailsContainer.style.height = initialHeight;

        busDetailsContainer.addEventListener('touchstart', (event) => {
            touchStartY = event.touches[0].clientY;
        });

        busDetailsContainer.addEventListener('touchend', (event) => {
            touchEndY = event.changedTouches[0].clientY;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeDistance = touchStartY - touchEndY;

            if (swipeDistance > 50) {
                // Swipe Up detected
                busDetailsContainer.style.height = maxHeight;
            } else if (swipeDistance < -50) {
                // Swipe Down detected
                busDetailsContainer.style.height = initialHeight;
            }
        }
    }, []);

    return (
        <div className="app">
            <nav className="top">
                <div className="navbar">
                    <img src="/images/profile_pic.png" className="nav-icons nav-back-icon"></img>
                    <h3>Bus Tracking</h3>
                    <img src="/images/profile_pic.png" alt="" className="nav-icons profile_pic" />
                </div>
            </nav>
            <div className="mid-container">
                <div className="mid">
                    <SearchContent1 />
                </div>
                <div className="test"></div>
                <div className="bus-details-container">HI</div>
            </div>
            <div className="bottom">
                <Footer />
            </div>
        </div>
    );
}