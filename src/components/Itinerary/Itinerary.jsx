import React, { useEffect, useState } from "react";
import STYLES from './Itinerary.scss';
import moment from 'moment';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

export default function Itinerary({ agent, agent_rating, id, assignedLegs, allLegs, price }) {

    const [finalItinerary, setfinalItinerary] = useState({})
    const [itineraryLegs, setItineraryLegs] = useState([]);
    const [airLineLogoInbound, setAirLineLogoInbound] = useState();
    const [airLineLogoOutbound, setAirLineLogoOutbound] = useState();
    const [loaded, setLoaded] = useState(false);



    useEffect(() => {
        getItineraryLeg();
        setLoaded(true);
    }, [1])

    function getItineraryLeg() {
        let itineraryLegs = [];
        for (let assignedLeg of assignedLegs) {
            for (let oneOfManyLegs of allLegs) {
                if (assignedLeg == oneOfManyLegs.id) {
                    console.log('match');
                    itineraryLegs.push(oneOfManyLegs);
                }
            }
        }
        setItineraryLegs(itineraryLegs);
    }

    function getAirlineLogoOutbound() {
        setAirLineLogoOutbound(`https://logos.skyscnr.com/images/airlines/favicon/${itineraryLegs[0].airline_id}.png`);
        return airLineLogoOutbound;
    }

    function getAirlineLogoInbound() {
        setAirLineLogoInbound(`https://logos.skyscnr.com/images/airlines/favicon/${itineraryLegs[1].airline_id}.png`);
        return airLineLogoInbound;
    }

    if (!loaded) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <div className={getClassName("flight-details")}>

                <div className={getClassName("flight-time-place")}>

                    {/* <img src={airLineLogoOutbound} alt="airline_logo_outbound"></img>
                    <img src={airLineLogoInbound} alt="airline_logo_inbound"></img> */}

                    <div className={getClassName("top-row")}>
                        <div className={getClassName("top-row-col1")}>
                            <section className={getClassName("flight")}>
                                <div className={getClassName("column")}>
                                    <p className={getClassName("bold")}>{moment(itineraryLegs[0].departure_time).format('HH:mm')}</p>
                                    <p>{itineraryLegs[0].departure_airport}</p>
                                </div>

                                <h1> > </h1>

                                <div className={getClassName("column")}>
                                    <p className={getClassName("bold")}>{moment(itineraryLegs[0].arrival_time).format('HH:mm')}</p>
                                    <p>{itineraryLegs[0].arrival_airport}</p>
                                </div>
                            </section>

                            <section className={getClassName("flight")}>
                                <div className={getClassName("column")}>
                                    <p className={getClassName("bold")}>{moment(itineraryLegs[1].departure_time).format('HH:mm')}</p>
                                    <p>{itineraryLegs[1].departure_airport}</p>
                                </div>

                                <h1> > </h1>

                                <div className={getClassName("column")}>
                                    <p className={getClassName("bold")}>{moment(itineraryLegs[1].arrival_time).format('HH:mm')}</p>
                                    <p>{itineraryLegs[1].arrival_airport}</p>
                                </div>
                            </section>
                        </div>


                        <div className={getClassName("top-row-col2")}>

                            <section className={getClassName("time-stops")}>
                                <div className={getClassName("column")}>
                                    <p>{itineraryLegs[0].duration_mins} mins</p>
                                    <p>{(itineraryLegs[0].stops > 0) ? itineraryLegs[0].stops + ' Stop' : 'Direct'}</p>
                                </div>

                                <div className={getClassName("column")}>
                                    <p>{itineraryLegs[1].duration_mins} mins</p>
                                    <p>{(itineraryLegs[1].stops > 0) ? itineraryLegs[1].stops + ' Stop' : 'Direct'}</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <div className={getClassName("bottom-row")}>
                    <div >
                        <p className={getClassName("price")}>{price}</p>
                        <p id='red'>{agent}</p>
                    </div>

                    <div>
                        <button className={getClassName("select-button")}>Select</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
