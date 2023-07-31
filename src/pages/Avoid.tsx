
import { solutionData } from '../content/solution'
import Accordions from '../components/Accordions'
import { language } from '../content/languages'
import { malSolutionData } from '../content/malayalam/solutions'
function Avoid() {
  return (
    <>
     {language == 'English' && <Accordions data={solutionData}/>}
  {language == 'Malayalam' && <Accordions data={malSolutionData}/>}
    </>
  )
}

export default Avoid