import {
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField
} from "@mui/material";
import { Button } from '@mui/material';
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import InputAdornment from "@mui/material/InputAdornment";
import ResponsiveCard from "../Responsive/ResponsiveCard";
import ResponsiveContainerGrid from "../Responsive/ResponsiveContainerGrid";
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    backgroundColor: "#F0FFF0",
    padding: "2rem",
  },
  header: {
    textAlign: "center",
    color: "#d32222",
    fontSize: '2rem'
  },
  textField: {
    marginBottom: "1rem",
    borderColor: "red",
    color: "#000000",
  },
  button: {
    height: "3.3rem",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 0.5rem 0 0.5rem",
    backgroundColor: "#d32222",
    color: "#ffff",
    textTransform: "none",
    fontSize: "1rem",
  },
});

const SignUp = () => {
  const classes = useStyle();

  return (
    <div>
      <ResponsiveContainerGrid>
        <Grid item xs={12}>
          <ResponsiveCard>
            <form className={classes.form}>
              <CardHeader
                className={classes.header}
                sx={{
                  fontSize : "2rem",
                  fontWeight: 'bold'
                }}
                title="Sign Up"
              />
              <CardContent>
                <TextField
                  className={classes.textField}
                  id="demo-helper-text-misaligned-no-helper"
                  // label="Name"
                  required
                  fullWidth
                  type="text"
                  variant="outlined"
                  placeholder="Your Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  className={classes.textField}
                  id="demo-helper-text-misaligned-no-helper"
                  // label="Name"
                  required
                  fullWidth
                  type="text"
                  variant="outlined"
                  placeholder="Your Email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  className={classes.textField}
                  id="demo-helper-text-misaligned-no-helper"
                  // label="Name"
                  required
                  fullWidth
                  type="text"
                  variant="outlined"
                  placeholder="Your Passsword"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </CardContent>

              <CardActions>
                <Button
                  className={classes.button}
                  type="submit"
                  fullWidth
                  variant="contained"
                >
                  Sign Up
                </Button>
              </CardActions>
            </form>
          </ResponsiveCard>
        </Grid>
      </ResponsiveContainerGrid>
    </div>
  );
};

export default SignUp;