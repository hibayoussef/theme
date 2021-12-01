import { Card } from "@mui/material";
import ResponsiveConstants from "./ResponsiveConstants";
import { makeStyles } from '@mui/styles';
import { FC } from "react";
import { Theme } from '@mui/system';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    
    [theme.breakpoints.down(ResponsiveConstants.mobileBreakpoint)]: {
      boxShadow: 0
    },
    [theme.breakpoints.up(ResponsiveConstants.mobileBreakpoint)]: {
      width: 500,
      boxShadow: 4,
    },
    height: "100%",
  },
}));

const ResponsiveCard: FC = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>{children}</Card>
    </>
  );
};

export default ResponsiveCard;
