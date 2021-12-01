import {
  AppBar,
  makeStyles,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { SetStateAction, useState } from "react";

const useStyle = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1.5em"
  },

  tabContainer: {
    marginLeft: "auto"
  },

  tab: {
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: 700,
    fontSize: "1rem",
    minWidth: 10,
    marginLeft: "25px",
    color: '#E1D9D1'
  },

  toolbar:{
    padding: '0 4em 0 4em'
  },
  logoPart1:{
    // backgroundColor: 'white',
    fontWeight: 400,
    color: '#E1D9D1'
  },
  logoPart2:{
    backgroundColor: '#E1D9D1',
    fontWeight: 600,
    borderRadius: 16,
    border: '10px solid #E1D9D1',
    color: '#d32222'
    
  },
  appBar:{
   backgroundColor: '#d32222',
   marginBottom: '10rem'
  }
}))

export default function Header() {
  const classes = useStyle();
  const [value, setValue] = useState(0)
  const handleChange = (event: any, value: SetStateAction<number>) => {
    setValue(value);
  };

  return (
    // <ElevationScroll>
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar disableGutters className= {classes.toolbar}>
        <Typography variant="h3" className={classes.logoPart1}>
          TO<span className= {classes.logoPart2}>DO</span>
        </Typography>
        <Tabs 
        // indicatorColor="primary"
        value={value} onChange={ handleChange } className= { classes.tabContainer }>
          <Tab className= {classes.tab} label="Sign Up" />
          <Tab className= {classes.tab} label="Login" />
        </Tabs>

        <div className= {classes.toolbarMargin}></div>
      </Toolbar>
    </AppBar>
    // </ElevationScroll>
  );
}
