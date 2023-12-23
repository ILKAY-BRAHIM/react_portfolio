import React from 'react';
import { ThemeProvider } from 'styled-components';



const lightTheme = {
  backgroundColor: "#f4f9f9", // A very light teal, almost white, for the background
  secondBackground: "#ffffff", // Pure white for cards and modal backgrounds for contrast
  borderColor: "#a6d3d1", // A softened version of the teal color for subtle borders
  navBackground: "rgba(244, 249, 249, 0.85)", // Translucent navigation background, harmonious with the main background
  headerColor: "#20504f", // A darker version of the teal for a contrasting header text
  textColor: "#30575B", // A slightly desaturated and darker teal for readable body text
  mainColor: "#338073", // The provided calming teal color for primary buttons and highlights
  secondColor: "#cae4e0", // A pastel version of the teal for secondary accents and UI elements
  gradientColor: "linear-gradient(45deg, #338073, #a6d3d1)", // A soft gradient using the main and lightened teal
  boxShadow: "0px 4px 6px rgba(51, 128, 115, 0.3)", // A subtle shadow that enhances elements without stark contrast
  keyword: "#276D6D", // Slightly more saturated teal for programming keywords, call to actions, or important information
  className: "#3D9A8C" // A harmonious yet distinct teal variant for class names and categorical tags
};
// const lightTheme = {
//   backgroundColor: "#f5f5fd",
//   secondBackground: "#ffffff",
//   borderColor: "#e7e3fa",
//   navBackground: "rgba(245, 241, 241, 0.3)",
//   headerColor: "#181818",
//   textColor: "#696969",
//   mainColor: "#8871e6",  
//   secondColor: "#dbd2ff",
//   gradientColor: "linear-gradient(45deg, #8871e6, #5a43b9)",
//   boxShadow: "8px 8px 18px #d4d4d4, -8px -8px 18px #ffffff",
//   keyword: "blue",
//   className: "#78b3da",
// };

const darkTheme = {
  backgroundColor: "#0F172A",
  secondBackground: "#121b31",
  borderColor: "#0d1324",
  navBackground: "rgba(13, 25, 48, 0.3)",
  headerColor: '#e0e7fd',
  textColor: "#8493A8",
  mainColor: "#5CE8D2",
  secondColor: "#122B39",
  gradientColor: "linear-gradient(45deg, #5CE8D2, #48c2b0)",
  boxShadow: "8px 8px 18px #0F172A, -8px -8px 18px #0F172A",
  keyword: "#326cb8",
  className: "#389d89"
};

function Theme({ children, theme }) {
  return <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>{children}</ThemeProvider>;
}

export default Theme;