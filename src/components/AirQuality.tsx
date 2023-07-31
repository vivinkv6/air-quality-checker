import { useState, useEffect } from "react";
import CurrentCondition from "./CurrentCondition";
import Graphs from "./Graphs";
import { featureContent } from "../content/featureContent";
import Loader from "./Loader";
import SearchCondition from "./SearchCondition";
import { language } from "../content/languages";
import { malFeatureContent } from "../content/malayalam/featureContent";

function AirQuality() {
  const [latitude, setLatitude] = useState<number | undefined>(10.527642);
  const [longitude, setLongitude] = useState<number | undefined>(76.214432);

 

  const [data, setData] = useState<
    | {
        co: number;
        nh3: number;
        no: number;
        no2: number;
        o3: number;
        pm2_5: number;
        pm10: number;
        so2: number;
      }
    | undefined
  >();
  const [loading, setLoading] = useState<boolean>(false);
  const [aqi, setAqi] = useState<number | undefined>();
  const [colour, setColour] = useState<string>();

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

          setAqi(datas?.list[0]?.main?.aqi);
        })
        .catch((err) => console.log(`Server Issue: ${err.message}`));
      setLoading(false);
      if (aqi == 1) {
        setColour("rgba(4, 99, 17, 0.74)");
      }
      if (aqi == 2) {
        setColour("rgba(245, 227, 1, 0.68)");
      }
      if (aqi == 3) {
        setColour("rgba(190, 91, 49, 0.6)");
      }
      if (aqi == 4) {
        setColour("rgba(246, 166, 0, 0.47)");
      }
      if (aqi == 5) {
        setColour("rgba(214, 32, 32, 0.65)");
      }
    };
    fetchData();
  }, [latitude, longitude, colour]);

  return (
    <div style={{ backgroundColor: `${colour}` }}>
      <div className="container">
        <div className="row">
          {language == 'English' &&  <h1 style={{textAlign:'center',fontFamily:'cursive',fontWeight:'bold',marginTop:'10px'}}>{featureContent.condition}</h1>}
         {language == 'Malayalam' && <h1 style={{textAlign:'center',fontFamily:'cursive',fontWeight:'bold',marginTop:'10px'}}>{malFeatureContent.condition}</h1>}
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          
          {loading ? (
            <Loader />
          ) : (
            <>
            <SearchCondition latitude={latitude} longitude={longitude} />
              <div className="col-md-9 py-5">
                <Graphs data={data} latitude={latitude} longitude={longitude} />
              </div>
              <div className="col-md-3">
                <CurrentCondition aqi={aqi} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AirQuality;
