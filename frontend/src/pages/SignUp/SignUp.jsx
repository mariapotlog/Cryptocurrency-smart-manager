import {
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Button
} from "@material-ui/core";

import { Copyright, CustomLink } from 'components';
import { useRegister } from "./utils"

import { useStyles } from "./styles"

export default function SignUp() {
  const classes = useStyles();
  const {
    register,
    validation: { isValid, setIsValid },
    errors: { setErrors, errors },
    loading: { isLoading, setIsLoading },
    user: {
      email, setEmail,
      firstName, setFirstName,
      lastName, setLastName,
      password, setPassword,
      confirmedPassword, setConfirmedPassword
    }
  } = useRegister()


  const registerWrapper = () => register(
    { email, firstName, lastName, password, confirmedPassword },
    { setIsLoading, setErrors, setIsValid }
  )

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <Box className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmedPassword"
                label="Confirm Password"
                type="password"
                id="confirmedPassword"
                onChange={(e) => setConfirmedPassword(e.target.value)}
                value={confirmedPassword}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => registerWrapper()}
            disabled={isLoading}
          >
            Sign Up
          </Button>
          <Box classNames={classes.errors}>
            {!isValid && errors.map(err => <Typography variant={"bod1y"} key={err} color='error'>{err}<br /></Typography>)}
          </Box>
          <Grid container justify="flex-end">
            <Grid item>
              <CustomLink to="/sign-up" >
                Already have an account? Sign in
              </CustomLink>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box mt={3}>
        <Copyright />
      </Box>
    </Container >
  );
}