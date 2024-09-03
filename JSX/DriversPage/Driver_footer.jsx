import React, { useState, useEffect, useRef } from "react";
import "../../CSS/Styles/Footer.css";

export default function Footer() {
    const [showNotifications, setShowNotifications] = useState(false);
    const notificationsRef = useRef(null);

    const toggleNotifications = () => {
        setShowNotifications(prev => !prev);
    };

    const handleClickOutside = (event) => {
        if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
            setShowNotifications(false);
        }
    };

    useEffect(() => {
        if (showNotifications) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showNotifications]);

    return (
        <div className="footer">
            <ul>
                <li>
                    <img className="footer-icons bus-icon" src="/images/home-icon.png" alt="Home" />
                    <div>Home</div>
                </li>
                <li onClick={toggleNotifications}>
                    <img className="footer-icons ticket-icon" src="/images/notification-icon.png" alt="Notifications" />
                    <div>Notifications</div>
                </li>
                <li>
                    <img className="footer-icons help-icon" src="/images/help-icon.png" alt="Help" />
                    <div>Help</div>
                </li>
            </ul>
            <div 
                className={`notifications-slide-up ${showNotifications ? 'show' : ''}`} 
                ref={notificationsRef}
            >
                <h3>Previous Notifications</h3>
                <ul>
                    <li>Notification 1</li>
                    <li>Notification 2</li>
                    <li>Notification 3</li>
                </ul>
            </div>
        </div>
    );
}
