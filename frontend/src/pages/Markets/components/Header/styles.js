
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
  root: {
    margin: "0 auto",
    backgroundColor: "#FAFAFA",
    fontSize: "18px",
    padding: "10px 5px 5px 15px",
    borderBottom: " 1px solid rgb(242,242,242)",
    boxShadow: "rgba(0,0,0,0.06) 0px 0px 40px",
  },
  header: {
    display: "flex",
    justifyContent: "space-evenly",
  },
});