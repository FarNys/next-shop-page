// import { LinkBehaviour } from "@/Components/Shared/LinkBehaviour";
import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  // direction: "rtl",
  palette: {
    mode: "light",
    background: {
      default: "#f1f5f9",
      paper: "#ffffff",
    },

    // primary: {
    //   main: "#ffffff",
    // },
    //   info: {
    //     main: "#0284c7",
    //   },
    //   text: {
    //     primary: "#374151",
    //     secondary: "#4b5563",
    //   },
    //   secondary: {
    //     main: "#ecedee",
    //   },
    // },
    // shadows: "none",
    // typography: {
    //   // fontFamily: "MyWebFont",
    //   button: {
    //     textTransform: "none",
    //   },
    // },
    // components: {
    //   MuiSelect: {
    //     defaultProps: {
    //       disableUnderline: true,
    //     },
    //   },
  },
  shadows: "none",
});
export const darkTheme = createTheme({
  // direction: "rtl",
  palette: {
    mode: "dark",

    background: {
      default: "#0a0a0a",
      paper: "#131314",
    },
    primary: {
      main: "#f1f5f9",
    },
    info: {
      main: "#38bdf8",
    },
    text: {
      primary: "#cbd5e1",
      secondary: "#94a3b8",
    },
    secondary: {
      main: "#212529",
    },
  },
  shadows: "none",

  typography: {
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiSelect: {
      defaultProps: {
        disableUnderline: true,
      },
    },
  },
});