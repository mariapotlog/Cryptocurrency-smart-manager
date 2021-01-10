import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: "5px",
    borderBottom: " 1px solid rgb(242,242,242)",
    boxShadow: "rgba(0,0,0,0.06) 0px 0px 40px",
    justifyContent: "center",
    alignItems: "center"
  },
  middle: {
    display: "flex",
    backgroundColor: "#FAFAFA",
    fontSize: "18px",
    padding: "10px 5px 10px 5px",
    boxShadow: "rgba(0,0,0,0.06) 0px 0px 40px",
    color: "#76808F",
  },
  text: {
    marginRight: "5px"
  }
});