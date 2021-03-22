import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import LoadingMask from "./components/LoadingMask";
import Hotel from "./components/Hotel";

const App = () => {
  const [hotels, setHotels] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    fetch("api/hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((err) => setHotels(null))
      .finally(() => setLoad(false));
  }, []);

  return (
    <div className="App">
      {load && <LoadingMask />}
      {hotels ? (
        hotels.map((hotel) => (
          <Hotel name={hotel.name} city={hotel.city} stars={hotel.stars} />
        ))
      ) : (
        <p>Oops, something happened</p>
      )}
    </div>
  );
};

export default App;
