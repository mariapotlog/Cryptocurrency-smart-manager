
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
  },
  canvas: {
    height: "auto",
  },
  red: {
    color: "red",
  },
  green: {
    color: "green",
  },
  buttonBox: {
    marginTop: "1vmin"
  },
  button: {
    margin: "0 0.5vmin",
    color: "black",
    backgroundColor: "white",
    boxShadow: "none"
  },
  canva: {
    width: 250,
    minHeight: 450,
    maxHeight: 650,
    [theme.breakpoints.up('xs')]: {
      minHeight: 250,
    },
    [theme.breakpoints.up('sm')]: {
      minHeight: 350,
    },
    [theme.breakpoints.up('md')]: {
      minHeight: 350,
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: 400,
    },
    [theme.breakpoints.up('xl')]: {
      minHeight: 650,
    }
  }
}));