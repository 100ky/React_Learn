import { useState, useEffect } from "react";

const App = () => {
  const url = "http://api.open-notify.org/iss-now.json";
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [ulrMap, setUrlMap] = useState("");


  const getCoordinates = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setLatitude(data["iss_position"]["latitude"]);
    setLongitude(data["iss_position"]["longitude"]);
    const iss_long=data["iss_position"]["longitude"];
    const iss_lat=data["iss_position"]["latitude"];
    setUrlMap(`https://mapy.cz/zakladni?x=${iss_long}&y=${iss_lat}&z=8`);
  }


  useEffect( () => {
    getCoordinates();
  }
    , []);
  
   https://mapy.cz/zakladni?x=15.6252330&y=49.8022514&z=8

  return (
    <div>
    <h1>API</h1>
    <h2>Zeměpisná šířka</h2>
    <p>{latitude}</p>
    <h2>Zeměpisná délka</h2>
      <p>{longitude}</p>
      <a href={ulrMap} target="_blank">Zobrazit na mapě</a>
    </div>
  )
}
export default App;