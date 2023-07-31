import { featureContent } from "../content/featureContent";
import { malFeatureContent } from "../content/malayalam/featureContent";
import { language } from "../content/languages";
function Introduction() {
  return (
    <>
    {language == 'English' && <>
    <h1
        style={{
          margin: "10px",
          fontWeight: "bold",
          fontFamily: "fantasy",
          letterSpacing: "2px",
        }}
      >
        {featureContent.title}
      </h1>
      <p
        style={{
          fontSize: "20px",
          margin: "10px",
          fontStyle:'italic',
          fontFamily: 'serif',
          letterSpacing: "1.5px",
        }}
      >
        {featureContent.description}
      </p>
    </>}

    {language == 'Malayalam' && <>
    <h1
        style={{
          margin: "10px",
          fontWeight: "bold",
          fontFamily: "fantasy",
          letterSpacing: "2px",
        }}
      >
        {malFeatureContent.title}
      </h1>
      <p
        style={{
          fontSize: "20px",
          margin: "10px",
          fontStyle:'italic',
          fontFamily: 'serif',
          letterSpacing: "1.5px",
        }}
      >
        {malFeatureContent.description}
      </p>
    </>}
      
    </>
  );
}

export default Introduction;
