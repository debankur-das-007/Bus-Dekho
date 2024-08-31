import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <ul>
                <li>
                    <img className="footer-icons bus-icon" src="/images/home-icon.png" />
                    <div>Home</div>
                </li>
                <li>
                    <img className="footer-icons ticket-icon" src="/images/notification-icon.png" />
                    <div>Notifications</div>
                </li>
                <li>
                    <img className="footer-icons help-icon" src="/images/help-icon.png" />
                    <div>Help</div>
                </li>
            </ul>
        </div>
    )
}