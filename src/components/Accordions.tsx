import Accordion from "react-bootstrap/Accordion";

type dataProps = {
  data: {
    title: string;
    details: { id: number; point: string; description: string }[];
  };
};

function Accordions(props: dataProps) {
  return (
    <>
      <h1
        style={{
          margin: "10px",
          fontWeight: "bold",
          fontFamily: "fantasy",
          letterSpacing: "3px",
        }}
      >
        {props.data.title}
      </h1>
      {props.data.details.map((value) => {
        return (
          <Accordion key={value.id}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{value.point}</Accordion.Header>
              <Accordion.Body>{value.description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </>
  );
}

export default Accordions;
