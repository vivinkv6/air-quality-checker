
import Accordions from '../components/Accordions'
import { precautionData } from '../content/precaution'
import { malPrecautionData } from '../content/malayalam/precaution'
import { language } from '../content/languages'

function Precaution() {
  return (
    <>
    {language == 'English' && <Accordions data={precautionData}/>}
  {language == 'Malayalam' && <Accordions data={malPrecautionData}/>}
  </>
  )
}

export default Precaution