import L from "leaflet";
import "leaflet-routing-machine";
import React, { useEffect } from "react";
import SearchContent1 from "../Body/SearchContent1";
import "../../CSS/Styles/SearchContent.css";
import "../../CSS/Styles/BusTracking/tracking.css";
import Footer from "../Footer/Footer";

export default function Tracking(props) {
    useEffect(() => {
        const busDetailsContainer = document.querySelector('.bus-details-container');
        let touchStartY = 0;
        let touchEndY = 0;
        const initialHeight = '50vh';
        const maxHeight = '75vh';

        busDetailsContainer.style.height = initialHeight;

        busDetailsContainer.addEventListener('touchstart', (event) => {
            touchStartY = event.touches[0].clientY;
        });

        busDetailsContainer.addEventListener('touchend', (event) => {
            touchEndY = event.changedTouches[0].clientY;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeDistance = touchStartY - touchEndY;

            if (swipeDistance > 10) {
                busDetailsContainer.style.height = maxHeight;
            } else if (swipeDistance < -10) {
                busDetailsContainer.style.height = initialHeight;
            }
        }

        if (!L.DomUtil.get('map')._leaflet_id) {
            const map = L.map('map').setView([51.505, -0.09], 16);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            let marker, circle, zoomed;

            navigator.geolocation.watchPosition(success, error, {
                enableHighAccuracy: true, // Request high accuracy
                timeout: 10000, // 10 seconds timeout
                maximumAge: 0 // No cached position
            });

            function success(pos) {
            // function success() {
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;
                // lat = 22.586406324415773;
                // lng = 88.42136717907289;
                const accuracy = pos.coords.accuracy;
                if (marker) {
                    map.removeLayer(marker);
                    map.removeLayer(circle);
                }

                marker = L.marker([lat, lng]).addTo(map);
                circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);

                if (!zoomed) {
                    zoomed = map.fitBounds(circle.getBounds());
                }

                map.setView([lat, lng], 16);

                const routingControl = L.Routing.control({
                    waypoints: [
                        L.latLng(lat, lng),
                        // L.latLng(22.586406324415773, 88.42136717907289),
                        L.latLng(22.576817278808065, 88.42870331084117)
                    ],
                    createMarker: () => null,
                    lineOptions: {
                        styles: [{ color: 'blue', opacity: 0.6, weight: 4 }]
                    },
                    addWaypoints: false,
                    draggableWaypoints: false,
                    fitSelectedRoutes: true,
                    show: false,
                    routeWhileDragging: false,
                    autoRoute: true,
                    useZoomParameter: false,
                    showAlternatives: false,
                    altLineOptions: {
                        styles: [{ color: 'green', opacity: 0.6, weight: 4 }]
                    }
                }).addTo(map);

                routingControl.on('routesfound', () => {
                    const unwantedElement = document.querySelector('#map > div.leaflet-control-container > div.leaflet-top.leaflet-right');
                    if (unwantedElement) {
                        unwantedElement.remove();
                    }
                });
            }

            function error(err) {
                if (err.code === 1) {
                    alert("Please allow geolocation access");
                } else {
                    alert("Cannot get current location");
                }
            }
        }
    }, []);

    return (
        <div className="app">
            <nav className="top">
                <div className="navbar">
                    <a href="/">
                       <img src="/images/back-icon.svg" className="nav-icons nav-back-icon"></img>
                    </a>
                    <h3>Bus Tracking</h3>
                    <img src="/images/profile_pic.png" alt="" className="nav-icons profile_pic" />
                </div>
            </nav>
            <div className="mid-container">
                <div className="mid">
                    <SearchContent1 />
                </div>
                <div className="test">
                    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
                        integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14=" crossOrigin="" />
                    <main>
                        <div id="map"></div>
                    </main>
                </div>
                <div className="bus-details-container">
                    <div className="bus-details">
                        <div className="line1">
                            <div className="line-icon"></div>
                        </div>
                        <div className="line2">
                            {(props.busDetails) ? <h2 className="bus-route">{props.busDetails.route}</h2> : <h2 className="bus-route">DW2</h2>}
                            <div className="arriving-status">
                                {(props.busDetails) ? <div className="arriving">props.busDetails.arriving</div> : <div className="arriving">Arriving</div>}
                                {/* {eta:} */
                                    (props.busDetails) ? <div className="eta">{props.busDetails.eta}</div> : <div className="eta">12:30 PM</div>
                                }
                            </div>
                        </div>
                        <div className="line3">
                            {
                                (props.busDetails) ? <div className="bus-location">{props.busDetails.location}</div> :
                                    <div className="bus-location">
                                        From: <b>Demo Location</b>
                                        <img src="/images/bus-arrow.png" alt="" className="arrow-icon" />
                                        To: <b>Demo Location</b>
                                    </div>
                            }
                        </div>
                        <div className="line4">
                            License Plate Number:
                            {/* license plate: */
                                (props.busDetails) ? <div className="license-plate"><b>{props.busDetails.licensePlate}</b></div> : <div className="license-plate"><b>WB3245</b> </div>
                            }
                        </div>
                        <div className="line5">
                            {
                                /* Bus Features : AC and EV are present or not: */
                                (props.busDetails) ?
                                    <>
                                        <div className="bus-features bus-features-ac">{props.busDetails.AC}</div>
                                        <div className="bus-features bus-features-ev">{props.busDetails.EV}</div>
                                    </> :
                                    <>
                                        <div className="bus-features bus-features-ac">AC  </div>
                                        <div className="bus-features bus-features-ev">EV  </div>
                                    </>
                            }
                        </div>
                        <div className="line6">
                            <div className="bus-speed">
                                <div className="speed-icon"></div>
                                <div className="speed">Speed: 40 km/h</div>
                            </div>
                            <div className="bus-temperature">
                                <div className="temperature-icon"></div>
                                <div className="temperature">Temperature: 25°C</div>
                            </div>
                            <div className="bus-fare">
                                <div className="fare-icon"></div>
                                <div className="fare">Fare: Rs10.00</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bottom">
                <Footer />
            </div>
        </div>
    );
}
