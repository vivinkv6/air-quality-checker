import { useState, useEffect } from "react";
import CurrentCondition from "./CurrentCondition";
import Graphs from "./Graphs";
import { Alert } from "react-bootstrap";

function AirQuality() {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [error, setError] = useState<string>();
  const [day, setDay] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>();
  let date = new Date();

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            setError("Error getting location: " + error.message);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
      console.log(latitude);
      console.log(longitude);
    };
    getLocation();
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
  }, [latitude, longitude]);

  return (
    <>
      <div className="container">
        <div className="row">
          {error && <Alert variant="danger">{error}</Alert>}
          <h1 style={{ textAlign: "center", fontSize: "50px" }}>
            {day}-{month}-{year}
          </h1>
          <div className="col-md-6">
            <Graphs latitude={latitude} longitude={longitude} />
          </div>
          <div className="col-md-6">
            <CurrentCondition />
          </div>
        </div>
      </div>
    </>
  );
}

export default AirQuality;
