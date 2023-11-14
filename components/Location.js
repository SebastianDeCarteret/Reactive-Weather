import WeatherCard from "./WeatherCard";

function Location({ cities, location, setLocation }) {
  const foundCity = cities.find((city) => city.city === location);
  console.log(foundCity);
  return <WeatherCard data={foundCity} />;
}

export default Location;
