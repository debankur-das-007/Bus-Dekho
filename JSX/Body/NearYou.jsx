import React from "react";
import "../../CSS/Styles/NearYou.css"
let obj1, obj2, obj3, obj4, obj10, obj9, obj8, obj7, obj6, obj5, obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18, obj19, obj20;
{
obj1 = {
    arriving: false,
    time: "1:30PM",
    no: "G7X",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj2 = {
    arriving: "true",
    time: "1:30PM",
    no: "B3K",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj3 = {
    arriving: "true",
    time: "1:30PM",
    no: "Q8J",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj4 = {
    arriving: "true",
    time: "1:30PM",
    no: "Z1W",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj5 = {
    arriving: "true",
    time: "1:30PM",
    no: "R5N",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj6 = {
    arriving: false,
    time: "1:30PM",
    no: "T2L",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj7 = {
    arriving: "true",
    time: "1:30PM",
    no: "F8P",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj8 = {
    arriving: "true",
    time: "1:30PM",
    no: "N4R",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj9 = {
    arriving: "true",
    time: "1:30PM",
    no: "C6V",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj10 = {
    arriving: "true",
    time: "1:30PM",
    no: "X9D",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj11 = {
    arriving: false,
    time: "1:30PM",
    no: "H3K",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj12 = {
    arriving: "true",
    time: "1:30PM",
    no: "J7B",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj13 = {
    arriving: "true",
    time: "1:30PM",
    no: "V1M",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj14 = {
    arriving: "true",
    time: "1:30PM",
    no: "S4G",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj15 = {
    arriving: "true",
    time: "1:30PM",
    no: "W8Q",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj16 = {
    arriving: false,
    time: "1:30PM",
    no: "D9A",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj17 = {
    arriving: "true",
    time: "1:30PM",
    no: "K5L",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj18 = {
    arriving: "true",
    time: "1:30PM",
    no: "M2T",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj19 = {
    arriving: "true",
    time: "1:30PM",
    no: "R6Z",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
obj20 = {
    arriving: "true",
    time: "1:30PM",
    no: "L7E",  // Randomized value
    from: "Demo Location",
    to: "Demo Location",
    ac: true,
    ev: true
}
}
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
                                From: <b>Demo Location</b>
                            </div>
                            <div className='arrow-img-container'>
                            <img className="bus-arrow" src="/images/bus-arrow.png" />
                            </div>
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