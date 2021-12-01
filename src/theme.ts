import { createTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },


  },

  typography: {
   
  },
  // myButton:{
  //     backgroundColor: "red"
  //     color: "white",
  //     border: "1px solid black"
  // }
});

export default theme;
