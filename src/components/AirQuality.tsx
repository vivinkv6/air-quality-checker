import { useState, useEffect } from "react";
import CurrentCondition from "./CurrentCondition";
import Graphs from "./Graphs";

import Loader from "./Loader";

function AirQuality() {
  const [latitude, setLatitude] = useState<number|undefined>(undefined);
  const [longitude, setLongitude] = useState<number|undefined>(undefined);

  const [day, setDay] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>();

  const [data, setData] = useState<{
    co:number,
    nh3: number,
    no: number,
    no2: number,
    o3: number,
    pm2_5:number,
    pm10:number,
    so2:number,
  }|undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [aqi, setAqi] = useState<number|undefined>(undefined);
  const[colour,setColour]=useState<string>('green')
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
            console.log("Error getting location: " + error.message);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
      console.log(latitude);
      console.log(longitude);
    };
    getLocation();
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());

    //data fetching

    const fetchData = async () => {
      setLoading(true);
      await fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((datas) => {
          setData(datas?.list[0]?.components);
          console.log(datas);
          console.log(datas.list[0].main.aqi);
          
          setAqi(datas?.list[0]?.main?.aqi)
        })
        .catch((err) => console.log(`Server Issue: ${err.message}`));
      setLoading(false);
      if(aqi == 1){
        setColour('green')
      }
      if(aqi == 2){
        setColour('yellow')
      }
      if(aqi == 3){
        setColour('brown')
      }
      if(aqi == 4){
        setColour('orange')
      }
      if(aqi == 5){
        setColour('red')
      }
    };
    fetchData();
    
  }, [latitude,longitude]);

  return (
    <div style={{backgroundColor:`${colour}`}}>
      <div className="container" >
        <div className="row" >
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <h1 style={{ textAlign: "center", fontSize: "50px" }}>
            {day}-{month}-{year}
          </h1>
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="col-md-9">
                <Graphs data={data} latitude={latitude} longitude={longitude} />
              </div>
              <div className="col-md-3">
                <CurrentCondition aqi={aqi}/>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AirQuality;
