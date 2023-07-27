import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from "recharts";

function History() {
  const [latitude, setLatitude] = useState<number | undefined>(undefined);
  const [longitude, setLongitude] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<[]>([]);

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

    const fetchHistory = async () => {
      await fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data.list);
          console.log(data.list);
        })
        .catch((err) => console.log(err));
    };
    fetchHistory();
  }, [latitude, longitude]);

  console.log(data)

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}

      <LineChart
       max-width={400}
        max-height={400}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />

        <Line type="monotone" dataKey="value" stroke="#387908" yAxisId={1} />
      </LineChart>
    </>
  );
}

export default History;
