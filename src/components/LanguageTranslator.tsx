import {
  language,
  changeToEnglish,
  changeToMalyalam,
} from "../content/languages";

function LanguageTranslator() {
  const languageTranslate = (): void => {
    if (language === "English") {
      changeToMalyalam();
    } else {
      changeToEnglish();
    }
  };

  return (
    <div style={{ position: "fixed", top: "50%", right: "10%" }}>
      <img
        src="https://w7.pngwing.com/pngs/895/863/png-transparent-translation-google-translate-computer-icons-microsoft-translator-android-language-blue-english-text-thumbnail.png"
        alt="Language Translator"
        style={{
          borderRadius: "50%",
          height: "80px",
          width: "80px",
          border: "3px solid black",
          padding: "10px",
        }}
        onClick={languageTranslate}
      />
      {/* <br />
      <br />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/800px-Speaker_Icon.svg.png"
        alt="text-to-speech"
        style={{
          borderRadius: "50%",
          height: "80px",
          width: "80px",
          border: "3px solid black",
          padding: "10px",
        }}
      /> */}
    </div>
  );
}

export default LanguageTranslator;
