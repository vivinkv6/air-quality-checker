
import { LineChart,XAxis,Tooltip,CartesianGrid,Line } from "recharts"

type locationProps={
  latitude:number|undefined,
  longitude:number|undefined
}

function Graphs(props:locationProps) {

  return(
    <>
   <LineChart
  width={400}
  height={400}
  // data={data}
  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
>
  <XAxis dataKey="name" />
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
</LineChart>
    <h1>Latitude: {props.latitude} Longitude: {props.longitude}</h1>
    </>
  )
}

export default Graphs