import React from "react";
// Import data and WeatherCard here
import cities from "./data";
import WeatherCard from "./components/WeatherCard";
import { useState } from "react";
import Location from "./components/Location";

function App() {
  const [location, setLocation] = useState("London");
  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <Location cities={cities} location={location} setLocation={setLocation} />
      <div className="app">
        {cities.map((city) => (
          <WeatherCard data={city} />
        ))}
      </div>
    </>
  );
}

export default App;
