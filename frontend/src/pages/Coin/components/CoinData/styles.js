
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    backgroundColor: "white",
    justifyContent: "space-between",
    margin: "0 13px 0 5px"
  },
  red: {
    color: "red",
  },
  green: {
    color: "green",
  },
  typo: {
    textAlign: "center"
  },
}));