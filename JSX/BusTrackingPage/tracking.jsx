import React from "react";
import SearchContent1 from "../Body/SearchContent1";
import "../../CSS/Styles/SearchContent.css";
import "../../CSS/Styles/BusTracking/tracking.css";
export default function Tracking() {
    return (
        <div className="app">
            <div className="top"></div>
            <nav>
                <h1>Bus Tracking</h1>
                <p>Track the location of your bus in real time!</p>
            </nav>
            <div className="mid">
                <SearchContent1 />
            </div>
            <div className="bottom">
            
            </div>
        </div>

    );
}
