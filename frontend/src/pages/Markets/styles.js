
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
  root: {
    minWidth: "90%"
  },
  header: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  list: {
    backgroundColor: "#FAFAFA",
    fontSize: "18px",
    borderBottom: " 1px solid rgb(242,242,242)",
    boxShadow: "rgba(0,0,0,0.06) 0px 0px 40px",
  }
});