import React from "react";
import "../../CSS/Styles/Footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <ul>
                <li>
                    <img className="footer-icons bus-icon" src="/images/bus-icon.png" />
                    <div>Bus</div>
                </li>
                <li>
                    <img className="footer-icons ticket-icon" src="/images/ticket-icon.png" />
                    <div>Tickets</div>
                </li>
                <li>
                    <img className="footer-icons help-icon" src="/images/help-icon.png" />
                    <div>Help</div>
                </li>
            </ul>
        </div>
    )
}