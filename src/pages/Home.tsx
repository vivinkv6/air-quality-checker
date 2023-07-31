import { useEffect } from 'react'
import AirQuality from '../components/AirQuality'
import Slider from '../components/Slider'
import Introduction from '../components/Introduction'
import LanguageTranslator from '../components/LanguageTranslator'


function Home() {

  useEffect

  return (
    <>
    <LanguageTranslator/>
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