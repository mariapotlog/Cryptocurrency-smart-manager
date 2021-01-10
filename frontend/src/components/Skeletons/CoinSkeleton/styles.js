
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: "flex",
    backgroundColor: "#FAFAFA",
    fontSize: "18px",
    borderBottom: " 1px solid rgb(242,242,242)",
    boxShadow: "rgba(0,0,0,0.06) 0px 0px 40px",
    minHeight: "65.5px",
  },
  image: {
    margin: "auto",
    width: "inherit",
    padding: "0 20px",
  },
});