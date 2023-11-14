import WeatherCard from "./WeatherCard";

function Location({ cities, location, setLocation }) {
  console.log(`location: ${location}`);
  const foundCity = cities.find(
    (city) => city.city.toLowerCase() === location.toLowerCase()
  );

  if (location === "") {
    // default position show all weather data when no location
    return (
      <div className="app">
        {cities.map((city) => (
          <WeatherCard data={city} />
        ))}
      </div>
    );
  }

  if (foundCity === undefined) {
    // no locations message
    return (
      <h2
        style={{
          alignSelf: "center",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "black",
          margin: "10px",
        }}
      >
        Location not found
      </h2>
    );
  } else {
    // return found city from search
    return (
      <div className="app">
        <WeatherCard data={foundCity} />
      </div>
    );
  }
}

export default Location;
