
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: "15px auto auto auto",
    minWidth: "90%",
    maxWidth: "90%"
  },
  greeting: {
    margin: "40px auto 30px auto",
  }
});