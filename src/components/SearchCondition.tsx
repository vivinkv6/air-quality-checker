import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



type locationProps={
    latitude:number|undefined,
    longitude:number|undefined,
    // setLatitude:React.Dispatch<React.SetStateAction<number|undefined>>,
    // setLongitude:React.Dispatch<React.SetStateAction<number|undefined>>
   
}

function SearchCondition(props:locationProps) {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
            <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Latitude</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
         value={props.latitude}
        //  onChange={(e)=>props.setLatitude(e.target.value)}
        />
      </InputGroup>
            </div>
            <div className="col-md-6">
            <InputGroup size="lg" >
        <InputGroup.Text id="inputGroup-sizing-lg">Longitude</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          value={props.longitude}
        //   onChange={(e)=>props.setLongitude(e.target.value)}
        />
      </InputGroup>
            </div>
        </div>
    </div>
    </>
  )
}

export default SearchCondition