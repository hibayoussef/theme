import { Grid } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { FC } from "react";
import ResponsiveConstants from "./ResponsiveConstants";
import { Theme } from '@mui/system';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up(ResponsiveConstants.mobileBreakpoint)]: {
      minHeight: 600,
    },
  },
}));

const ResponsiveContainerGrid: FC = ({  children }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        className={classes.root}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Grid>
    </div>
  );
};

export default ResponsiveContainerGrid;
