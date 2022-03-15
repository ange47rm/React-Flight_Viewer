import React, { useEffect, useState } from "react";
import FlightData from '../Flight-Data/FlightData';
import Header from '../Header';
import STYLES from './App.scss';



const getClassName = (className) => STYLES[className] || 'UNKNOWN';

function App() {

  const [flightData, setFlightData] = useState([]);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchFlightData();
  }, []);


  async function fetchFlightData() {
    await fetch("./flights.json")
      .then(res => res.json())
      .then((data) => {
        setFlightData(data);
        setLoaded(true);
      })
  }

  if (!loaded) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <Header />
      <main>
        <FlightData flightData={flightData} />
      </main>
    </div>
  )
};

export default App;
