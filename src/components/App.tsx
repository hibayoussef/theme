
import { ThemeProvider } from "@mui/material";
import theme from '../utils/Theme';
import SignUp from "./ui/Authentication/signup";

const App = () => {
  return (
    <ThemeProvider theme={ theme }>
      {/* <Header /> */}
      {/* <TabsContainer /> */}
      <SignUp />
    </ThemeProvider>
  );
};

export default App;
