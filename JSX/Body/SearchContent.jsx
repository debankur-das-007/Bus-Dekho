import React, { useState } from "react";
import "../../CSS/Styles/SearchContent.css"
export default function SearchContent() {
    const [selectDate, setSelectDate] = useState(true);
    const [today, setToday] = useState(false);
    const [tomorrow, setTomorrow] = useState(false);

    function checkTodayOrTomorrow(e) {
        const selectedDate = e.target.value;

        // Get today's date in local time zone (YYYY-MM-DD format)
        const now = new Date();
        const todayDate = new Date(now.setHours(0, 0, 0, 0)).toLocaleDateString('en-CA'); // 'en-CA' gives YYYY-MM-DD format

        // Get tomorrow's date in local time zone (YYYY-MM-DD format)
        now.setDate(now.getDate() + 1);
        const tomorrowDate = new Date(now.setHours(0, 0, 0, 0)).toLocaleDateString('en-CA');

        console.log("Selected Date:", selectedDate);
        console.log("Today's Date:", todayDate);
        console.log("Tomorrow's Date:", tomorrowDate);

        if (selectedDate === todayDate) {
            console.log("today");
            setToday(true);
            setTomorrow(false);
        } else if (selectedDate === tomorrowDate) {
            console.log("tomorrow");
            setToday(false);
            setTomorrow(true);
        } else {
            console.log("neither");
            setToday(false);
            setTomorrow(false);
        }
    }

    return (
        <div className="search-content">
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
            <div className='date-search'>
                <div className="user-arrival-departure-container2">
                    <div className='date-sel'>
                        <label htmlFor="departure-date">Departure Date</label>
                        <div>
                            {selectDate ? <input type="date" id="departure-date-select" placeholder="Select a date" onChange={checkTodayOrTomorrow} /> : <div id="departure-date" onClick={() => setSelectDate(true)}>Select a date</div>}
                        </div>
                    </div>
                    <div className='today-tomorrow'>
                        {today ? <div className="today today-bold"><b>Today</b></div> : <div className="today today-greyed">Today</div>}
                        {tomorrow ? <div className="tomorrow tomorrow-bold"><b>Tomorrow</b></div> : <div className="tomorrow tomorrow-greyed">Tomorrow</div>}
                    </div>
                </div>
                <div className='search'>
                    <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                    </div>
                    <input placeholder="Search"/>
                    {/* <div >Search</div> */}
                </div>

            </div>
        </div>
    );
}