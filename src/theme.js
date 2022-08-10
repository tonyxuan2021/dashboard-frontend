import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(240, 242, 245)",
      light: "rgb(255, 255, 255, 0.5)",
      grey: "rgb(123, 128, 154)",
      dark: "rgb(52, 71, 103)",
    },
    secondary: {
      main: "#15c630",
    },

    third: {
      main: "rgb(188, 226, 190)",
    },
    otherColor: {
      main: "#999",
    },
    blueColor: {
      main: "rgb(26, 115, 232)",
    },
    blackColor: {
      main: "rgb(25, 25, 25)",
    },
  },
});
