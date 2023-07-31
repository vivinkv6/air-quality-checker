import { featureContent } from "../content/featureContent";
import { malFeatureContent } from "../content/malayalam/featureContent";
import { language } from "../content/languages";
import Accordion from "react-bootstrap/Accordion";

function Feature() {
  return (
    <>
      {language == "Malayalam" && (
        <>
          <h1
            style={{
              margin: "10px",
              fontWeight: "bold",
              fontFamily: "fantasy",
              letterSpacing: "2px",
            }}
          >
            {malFeatureContent.features.title}
          </h1>
          {malFeatureContent.features.points.map((value) => {
            return (
              <>
                <Accordion key={value.id}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{value.point}</Accordion.Header>
                    <Accordion.Body>{value.description}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </>
            );
          })}
        </>
      )}
      {language == "English" && (
        <>
          <h1
            style={{
              margin: "10px",
              fontWeight: "bold",
              fontFamily: "fantasy",
              letterSpacing: "2px",
            }}
          >
            {featureContent.features.title}
          </h1>
          {featureContent.features.points.map((value) => {
            return (
              <>
                <Accordion key={value.id}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{value.point}</Accordion.Header>
                    <Accordion.Body>{value.description}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </>
            );
          })}
        </>
      )}
    </>
  );
}

export default Feature;
