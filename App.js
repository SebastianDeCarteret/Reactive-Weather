import React from "react";
import cities from "./data";
//import WeatherCard from "./components/WeatherCard";
import { useState } from "react";
import Location from "./components/Location";
import Form from "./components/Form";

function App() {
  const [location, setLocation] = useState("");
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <Form location={location} setLocation={setLocation} />
      <Location cities={cities} location={location} setLocation={setLocation} />
    </div>
  );
}

export default App;
