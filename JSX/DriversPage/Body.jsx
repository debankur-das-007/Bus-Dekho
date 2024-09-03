// import React from "react";
// // import "../Styles/NearYou.css";
// import "../../CSS/Styles/NearYou.css";
// // import Footer from "./Driver_footer";
// // import "../Styles/Footer.css";
// import "../../CSS/Styles/Footer.css";
// export default function Body() {
//     let obj1, obj2, obj3, obj4, obj10, obj9, obj8, obj7, obj6, obj5, obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18, obj19, obj20;

//     obj1 = { time: "1:30PM", no: "G7X", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj2 = { time: "1:30PM", no: "B3K", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj3 = { time: "1:30PM", no: "Q8J", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj4 = { time: "1:30PM", no: "Z1W", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj5 = { time: "1:30PM", no: "R5N", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj6 = { time: "1:30PM", no: "T2L", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj7 = { time: "1:30PM", no: "F8P", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj8 = { time: "1:30PM", no: "N4R", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj9 = { time: "1:30PM", no: "C6V", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj10 = { time: "1:30PM", no: "X9D", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj11 = { time: "1:30PM", no: "H3K", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj12 = { time: "1:30PM", no: "J7B", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj13 = { time: "1:30PM", no: "V1M", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj14 = { time: "1:30PM", no: "S4G", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj15 = { time: "1:30PM", no: "W8Q", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj16 = { time: "1:30PM", no: "D9A", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj17 = { time: "1:30PM", no: "K5L", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj18 = { time: "1:30PM", no: "M2T", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj19 = { time: "1:30PM", no: "R6Z", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
//     obj20 = { time: "1:30PM", no: "L7E", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };

//     // let data = [obj1, obj2, obj3, obj4, obj10, obj9, obj8, obj7, obj6, obj5, obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18, obj19, obj20];
//     let data = [obj1, obj2, obj3, obj4];

//     const buses = data.map((x, index) => (
//         <li key={index} className="bus-container">
//             <div className="buses">
//                 <div className="bus-container-left">
//                     <div className="bus-left-line1">
//                         <h3>{x.no}</h3>
//                     </div>
//                     <div className="bus-left-line2">
//                         <div className="bus-from">
//                             From: <b>{x.from}</b>
//                         </div>
//                         <img className="bus-arrow" src="/images/bus-arrow.png" alt="arrow" />
//                         <div className="bus-to">
//                             To: <b>{x.to}</b>
//                         </div>
//                     </div>
//                     <div className="bus-left-line3">
//                         {x.ac && <div className="bus-features">AC</div>}
//                         {x.ev && <div className="bus-features">EV</div>}
//                     </div>
//                 </div>
//                 <div className="bus-container-right">
//                     <div className="bus-right-time">{x.time}</div>
//                 </div>
//             </div>
//         </li>
//     ));

//     return (
//         <div>
//             <ul className="line1">
//                 <li className="qr line1-elements">
//                     <img src="/images/qrcode.png" alt="QR Code" />
//                     <div>Scan QR to Start trip</div>
//                 </li>
//                 <li className="line1-elements">
//                     <img src="/images/calendar-icon.png" alt="Calendar" />
//                     <div>Trip Schedule</div>
//                 </li>
//                 <li className="your-trips line1-elements">
//                     <img src="/images/trips-icon.png" alt="Trips" />
//                     <div>Your Trips</div>
//                 </li>
//             </ul>
//             <div className="line2">
//                 Today's
//                 <div className="line2-subline">
//                     Upcoming Trips
//                 </div>
//             </div>
//             <ul className="buses-list">
//                 {buses}
//             </ul>
//         </div>
//     );
// }

import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "../../CSS/Styles/NearYou.css";
import "../../CSS/Styles/Footer.css";

export default function Body() {
    let obj1, obj2, obj3, obj4, obj10, obj9, obj8, obj7, obj6, obj5, obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18, obj19, obj20;

    obj1 = { time: "1:30PM", no: "G7X", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
    obj2 = { time: "1:30PM", no: "B3K", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
    obj3 = { time: "1:30PM", no: "Q8J", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
    obj4 = { time: "1:30PM", no: "Z1W", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };

    let data = [obj1, obj2, obj3, obj4];

    const buses = data.map((x, index) => (
        <li key={index} className="bus-container">
            <div className="buses">
                <div className="bus-container-left">
                    <div className="bus-left-line1">
                        <h3>{x.no}</h3>
                    </div>
                    <div className="bus-left-line2">
                        <div className="bus-from">
                            From: <b>{x.from}</b>
                        </div>
                        <img className="bus-arrow" src="/images/bus-arrow.png" alt="arrow" />
                        <div className="bus-to">
                            To: <b>{x.to}</b>
                        </div>
                    </div>
                    <div className="bus-left-line3">
                        {x.ac && <div className="bus-features">AC</div>}
                        {x.ev && <div className="bus-features">EV</div>}
                    </div>
                </div>
                <div className="bus-container-right">
                    <div className="bus-right-time">{x.time}</div>
                </div>
            </div>
        </li>
    ));

    useEffect(() => {
        const qrCodeSuccessCallback = (decodedText, decodedResult) => {
            console.log(`Code matched = ${decodedText}`, decodedResult);
            // Here you can handle the decoded result, like starting a trip
        };

        const qrCodeErrorCallback = (errorMessage) => {
            console.log(`QR Code no match: ${errorMessage}`);
        };

        const config = { fps: 10, qrbox: 250 };
        const html5QrCodeScanner = new Html5QrcodeScanner(
            "qr-reader",
            config,
            false
        );
        html5QrCodeScanner.render(qrCodeSuccessCallback, qrCodeErrorCallback);

        // Cleanup the scanner on component unmount
        return () => {
            html5QrCodeScanner.clear();
        };
    }, []);

    return (
        <div>
            <ul className="line1">
                <li className="qr line1-elements">
                    <div id="qr-reader" style={{ width: "100%" }}></div>
                    <div>Scan QR to Start trip</div>
                </li>
                <li className="line1-elements">
                    <img src="/images/calendar-icon.png" alt="Calendar" />
                    <div>Trip Schedule</div>
                </li>
                <li className="your-trips line1-elements">
                    <img src="/images/trips-icon.png" alt="Trips" />
                    <div>Your Trips</div>
                </li>
            </ul>
            <div className="line2">
                Today's
                <div className="line2-subline">
                    Upcoming Trips
                </div>
            </div>
            <ul className="buses-list">
                {buses}
            </ul>
        </div>
    );
}
