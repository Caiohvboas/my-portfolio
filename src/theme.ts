import { createTheme, responsiveFontSizes } from "@mui/material";



let theme = createTheme({
    palette: {
      primary: {
        main: '#081325',
      },
      secondary: {
        main: '#101F3C'
      },
    },
    typography: {
        fontFamily: "Helvetica Neue"
    }
  });

  theme = responsiveFontSizes(theme)

  export default theme;