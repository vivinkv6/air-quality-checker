export const featureContent: {
  title: string;
  description: string;
  condition:string,
  features: {
    title: string;
    points: { id: number; point: string; description: string }[];
  };
} = {
  title: "Air Checker ?",
  description: `It is a powerful web application that allows users to check the real-time air quality of their region using latitude and longitude coordinates. The application provides a visual representation of each air quality data point through graphs, enabling users to gain valuable insights at a glance. Additionally, the app categorizes the current air quality condition into various levels, such as "good," "moderate," "poor," "severe," or "hazardous." Moreover, Air Checker includes essential content, offering precautionary measures, causes, and potential solutions to address air quality concerns. `,
  condition:`Today's Air Quality`,
  features: {
    title: "Features",
    points: [
      {
        id: 1,
        point: "Visualization through Graph",
        description: `Air Checker enhances the user experience by visually presenting air quality data through interactive graphs. Users can analyze trends and patterns over time, enabling them to make informed decisions.`,
      },
      {
        id: 2,
        point: "Speech for Accessibility",
        description:
          "To cater to visually impaired users, Air Checker incorporates a speech feature that provides audible air quality information. By clicking a button, the app will read out the current air quality condition, ensuring accessibility for all users.",
      },
      {
        id: 3,
        point: "Malayalam Translator",
        description:
          " To cater to users who may have difficulty understanding English, Air Checker includes a Malayalam translator feature. Users can choose to translate air quality information and related content into Malayalam, making it more accessible to a broader audience.",
      },
      {
        id: 4,
        point: "Progressive Web App (PWA)",
        description:
          "Air Checker is developed as a Progressive Web App, allowing users to install the application on their devices. This feature enhances user experience, providing a native app-like feel.",
      },
    ],
  },
};
