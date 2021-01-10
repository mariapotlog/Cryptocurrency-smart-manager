import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@material-ui/core";

import { Copyright, CustomLink } from 'components';
import { useLogin } from './utils';

import { useStyles } from "./styles"

export default function SignIn() {
  const classes = useStyles();
  const {
    login,
    validation: { isValid },
    errors: { errors },
    loading: { isLoading },
    user: {
      email, setEmail,
      password, setPassword,
    }
  } = useLogin();

  const loginWrapper = (e) => login(e);

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <Box className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            // autoFocus
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => loginWrapper(e)}
            disabled={isLoading}
          >
            Sign In
          </Button>
          <Box classNames={classes.errors} >
            {!isValid && errors.map(err => <Typography variant={"bod1y"} key={err} color='error'>{err}<br /></Typography>)}
          </Box>
          <Grid container>
            <Grid item>
              <CustomLink to="/sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
              </CustomLink>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box mt={3}>
        <Copyright />
      </Box>
    </Container>
  );
}