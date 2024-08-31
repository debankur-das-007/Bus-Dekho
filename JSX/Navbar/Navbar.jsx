import React from "react";
// import "../Styles/Navbar.css";
import "../../CSS/Styles/Navbar.css";
// export default function Navbar(props) {
export default function Navbar(props) {
    function checkTime() {
        let time = new Date();
        let hours = time.getHours();
        if (hours < 12) {
            return ("Good Morning");
        } else if (hours < 18) {
            return ("Good Evening");
        } else {
            return ("Good afternoon");
        }
    }
    return(
        <nav>
            <div className="navbar1">
                <div className="hamburger-container">
                    <img src="/images/hamburger.png" className="hamburger"/>
                </div>
                <div className="profile-pic-container"  >
                    {(props.user && props.user.profile_pic) ? <img src={`/images/${props.user.profile_pic}`} className="profile-pic" alt="profile-pic" />
                : <img src="/images/profile_pic.png" alt="profile-pic" className="profile-pic"/>}
                </div>
            </div>
            <div className="navbar2">
                <div className="greetings">
                    {checkTime()}
                </div>
                <div className="username">
                    {
                        (props.user && props.user.username) ? <h2>{props.user.username}</h2> : <h2>John Doe</h2>
                    }
                </div>
            </div>
        </nav>
    )
}