import { useEffect } from 'react'
import AirQuality from '../components/AirQuality'
import Slider from '../components/Slider'
import Introduction from '../components/Introduction'


function Home() {

  useEffect

  return (
    <>
    <Slider/>
    <div style={{marginTop:'5rem'}}>
    <Introduction/>
    </div>
    <div style={{marginTop:'5rem'}}>
    <AirQuality/>
    </div>
    </>
  )
}

export default Home