
import Accordions from '../components/Accordions'
import { malCauseData } from '../content/malayalam/causes'
import { causeData } from '../content/causes'
import { language } from '../content/languages'

function Causes() {
  return (
    <>
  {language == 'English' && <Accordions data={causeData}/>}
  {language == 'Malayalam' && <Accordions data={malCauseData}/>}
   </>
  )
}

export default Causes