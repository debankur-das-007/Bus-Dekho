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

        // Initialize the map if it hasn't been initialized yet
        if (!L.DomUtil.get('map')._leaflet_id) 
            {
            // const map = L.map('map').setView([51.505, -0.09], 16);
            var map = L.map('map');
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);

            // Fetch the GeoJSON route file and add it to the map
            fetch('brouter.geojson') // Adjust the file path if needed
                .then(response => response.json())
                .then(data => {
                    L.geoJSON(data, {
                        style: {
                            color: 'blue', // Customize the route color
                            weight: 4 // Customize the line thickness
                        }
                    }).addTo(map);
                })
                .catch(error => console.error('Error loading GeoJSON:', error));

            // Use the Geolocation API to get the user's current location
            function onSuccess(position) {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                L.marker([lat, lng]).addTo(map)
                .bindPopup('You are here')
                .openPopup();
                // Set the map view to the user's location
                map.setView([lat, lng], 16);

            }

            function onError(error) {
                console.error('Error getting location: ', error);
                alert('Unable to retrieve your location.');
            }
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(onSuccess, onError);
            } else {
                alert('Geolocation is not supported by this browser.');
            }
        }
    }, []);

    return (
        <div className="app">
            <nav className="top">
                <div className="navbar">
                    <a href="/" style={{ display: 'inline-block', height: 'fit-content', borderRadius: '50px' }}>
                       <img src="/images/back-icon.svg" className="nav-icons nav-back-icon" alt="Back"></img>
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
                        <div id="map" style={{ height: '100vh', width: '100%' }}></div>
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
                                {(props.busDetails) ? <div className="arriving">{props.busDetails.arriving}</div> : <div className="arriving">Arriving</div>}
                                {(props.busDetails) ? <div className="eta">{props.busDetails.eta}</div> : <div className="eta">12:30 PM</div>}
                            </div>
                        </div>
                        <div className="line3">
                            {(props.busDetails) ? <div className="bus-location">{props.busDetails.location}</div> :
                                <div className="bus-location">
                                    From: <b>Demo Location</b>
                                    <img src="/images/bus-arrow.png" alt="" className="arrow-icon" />
                                    To: <b>Demo Location</b>
                                </div>
                            }
                        </div>
                        <div className="line4">
                            License Plate Number:
                            {(props.busDetails) ? <div className="license-plate"><b>{props.busDetails.licensePlate}</b></div> : <div className="license-plate"><b>WB3245</b> </div>}
                        </div>
                        <div className="line5">
                            {(props.busDetails) ?
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
