import React, { useState } from "react";
// import "../Styles/SearchContent.css"
import "../../CSS/Styles/SearchContent.css";
export default function SearchContent1() {
    return (
        <div className="search-content1">
            <div className='to-from'>
                <div className="to">
                    <label htmlFor="from-location" className="to-location-label">From</label>
                    <div className="from-location-container">
                        <input type="text" placeholder="Type to search" id="from-location" className="from_location" />
                    </div>
                </div>
                <div className="to">
                    <label htmlFor="to-location" className="to-location-label">To</label>
                    <div className="to-location-container">
                        <input type="text" placeholder="Type to search" id="to-location" className="to_location" />
                    </div>
                </div>
            </div>
            <div className='up-down-arrow'>
                <img src="/images/up-down-arrow.png" className="location-arrows" />
            </div>
        </div>
    );
}