import { Audio } from 'react-loader-spinner'

function Loader() {
  return (
    <Audio
    height={"80"}
    width={"80"}
    color={"green"}
    ariaLabel={"loading"}
  />
  )
}

export default Loader