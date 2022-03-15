import React, { useEffect, useState } from "react";
import Itinerary from "../Itinerary/Itinerary";
import STYLES from './FlightData.scss';



export default function FlightData({ flightData }) {

    const [itineraries, setItineraries] = useState(flightData.itineraries);
    const [legs, setLegs] = useState(flightData.legs);


    const itinerariesList = itineraries?.map(itinerary => {
        return (
            (<Itinerary
                key={itinerary.id}
                agent={itinerary.agent}
                agent_rating={itinerary.agent_rating}
                id={itinerary.id}
                assignedLegs={itinerary.legs}
                allLegs={legs}
                price={itinerary.price}
                />
            )
        )
    })

    if (itineraries && legs) {
        return (
            <>
               
                {itinerariesList}
            </>
        )
    } else {
        return (
            <h2>FFS</h2>
        )
    }
}