import React from "react";
// import "../Styles/NearYou.css"
import "../../CSS/Styles/NearYou.css";
let obj1 = { arriving: false, time: "1:30PM", no: "G7X", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj2 = { arriving: "true", time: "1:30PM", no: "B3K", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj3 = { arriving: "true", time: "1:30PM", no: "Q8J", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj4 = { arriving: "true", time: "1:30PM", no: "Z1W", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj5 = { arriving: "true", time: "1:30PM", no: "R5N", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj6 = { arriving: false, time: "1:30PM", no: "T2L", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj7 = { arriving: "true", time: "1:30PM", no: "F8P", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj8 = { arriving: "true", time: "1:30PM", no: "N4R", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj9 = { arriving: "true", time: "1:30PM", no: "C6V", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj10 = { arriving: "true", time: "1:30PM", no: "X9D", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj11 = { arriving: false, time: "1:30PM", no: "H3K", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj12 = { arriving: "true", time: "1:30PM", no: "J7B", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj13 = { arriving: "true", time: "1:30PM", no: "V1M", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj14 = { arriving: "true", time: "1:30PM", no: "S4G", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj15 = { arriving: "true", time: "1:30PM", no: "W8Q", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj16 = { arriving: false, time: "1:30PM", no: "D9A", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj17 = { arriving: "true", time: "1:30PM", no: "K5L", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj18 = { arriving: "true", time: "1:30PM", no: "M2T", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj19 = { arriving: "true", time: "1:30PM", no: "R6Z", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };
let obj20 = { arriving: "true", time: "1:30PM", no: "L7E", from: "Demo Location", to: "Demo Location2", ac: true, ev: true };

let data = [obj1, obj2, obj3, obj4, obj10, obj9, obj8, obj7, obj6, obj5, obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18, obj19, obj20];
export default function NearYou(props) {
    let buses = data.map((x) => {
        return (
            <li className="bus-container">
                <div className="buses">
                    <div className="bus-container-left">
                        <div className="bus-left-line1">
                            <h3>{`${x.no}`}</h3>
                            {(x.arriving) ? <div className="bus-arriving">Arriving </div> : <div className="bus-departing">Departing</div>}
                        </div>
                        <div className="bus-left-line2">
                            <div className="bus-from">
                                From: <b>{`${x.from}`}</b>
                            </div>
                            <img className="bus-arrow" src="/images/bus-arrow.png" />
                            <div className="bus-to">
                                To: <b>{`${x.to}`}</b>
                            </div>
                        </div>
                        <div className="bus-left-line3">
                            {(x.ac) ? <div className="bus-features">AC</div> : console.log()}
                            {(x.ev) ? <div className="bus-features">EV</div> : console.log()}
                        </div>
                    </div>
                    <div className="bus-container-right">
                        <div className="bus-right-time">{`${x.time}`}</div>
                    </div>
                </div>
            </li>
        )
    })
    return <ul className="buses-list">{buses}</ul>;
}