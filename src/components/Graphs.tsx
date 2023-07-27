
import { LineChart,XAxis,Tooltip,CartesianGrid,Line } from "recharts"

type locationProps={
  latitude:number|undefined,
  longitude:number|undefined,
  data:({
    co:number,
    nh3:number,
    no:number,
    o3:number,
    pm2_5:number,
    pm10:number,
    so2:number,
    no2:number
  }|undefined)
}


function Graphs(props:locationProps) {

  const datas=[{
    name:'co',
    value:props.data?.co
  },
  {
    name:'nh3',
    value:props.data?.nh3
  },
  {
    name:'no',
    value:props.data?.no
  },
  {
    name:'no2',
    value:props.data?.no2
  },
  {
    name:'o3',
    value:props.data?.o3
  },
  {
    name:'pm2_5',
    value:props.data?.pm2_5
  },
  {
    name:'pm10',
    value:props.data?.pm10
  },
  {
    name:'so2',
    value:props.data?.so2
  },
]
  
  return(
    <>
   <LineChart
   
  width={360}
  height={400}
  data={datas}
  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
>
  <XAxis dataKey="name" />
  <Tooltip />
  <CartesianGrid stroke="#171717" />
  
  <Line type="monotone" dataKey="value" stroke="#00fbff" yAxisId={1} />
</LineChart>
    {/* <h1>Latitude: {props.latitude} Longitude: {props.longitude}</h1> */}
    </>
  )
}

export default Graphs