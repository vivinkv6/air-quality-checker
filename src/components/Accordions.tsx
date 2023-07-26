
import Accordion from 'react-bootstrap/Accordion';


type dataProps={
  data:{id:number,point:string,description:string}[]
}


function  Accordions(props:dataProps) {
  return (
    <>
    {props.data.map((value)=>{
      return(
<Accordion  key={value.id}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{value.point}</Accordion.Header>
        <Accordion.Body>
          {value.description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      )
    })}
    
    </>
  );
}

export default Accordions