import React from "react";
import "../../CSS/Styles/Navbar.css";
import '../../CSS/Styles/menu.css';
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
        <nav className='navigation'>
            <div className="navbar1">

            <input type="checkbox" id="open"/>
            <label className='active' htmlFor="open">
            <img src="/images/hamburger.png" className="hamburger"/>
                </label>
                
  <div className="super">
    <div className="top1">
      <div className='app-name'>Bus App Name</div>
      <div className='cross'>
      <input type="checkbox" id="close"/>
      <label for="open">
        <img src='\src\assets\png-transparent-computer-icons-share-icon-hamburger-button-crossed-logo-share-icon-symbol.png'/>
        </label>
      </div>
    </div>
    <div className="bottom1">
      <div className="cards">
        <a href="#">
          <div className="content">
            <div className="icon1">
              <img src="#" />
            </div>
            <div className="text-holder">Language</div>
          </div>
        </a>
        <a href="#">
          <div className="content">
            <div className="icon1">
              <img src="#" />
            </div>
            <div className="text-holder">Settings</div>
          </div>
        </a>
        <a href="#">
          <div className="content">
            <div className="icon1">
              <img src="#" />
            </div>
            <div className="text-holder">Share</div>
          </div>
        </a>
        <a href="#">
          <div className="content">
            <div className="icon1">
              <img src="#" />
            </div>
            <div className="text-holder">Report Issue</div>
          </div>
        </a>
      </div>
      <div className="nav">
        <div>App Version 1.0.0</div>
        <div>Date</div>
      </div>
    </div>
  </div>








                <div className="profile-pic-container"  >
                    {(props.user && props.user.profile_pic) ? <img src={`/images/${props.user.profile_pic}`} className="profile-pic" alt="profile-pic" />
                : <img src="/images/profile_pic.png" alt="profile-pic" className="profile-pic"/>}
                </div>
                <label id="overlay" for="open"></label>
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