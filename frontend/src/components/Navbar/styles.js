import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: "flex",
    textAlign: "center",
    justifyContent: "space-between",
    borderBottom: " 1px solid rgb(242,242,242)",
    boxShadow: "rgba(0,0,0,0.06) 0px 0px 40px",
    backgroundColor: "#12161C",
    color: "white",
    padding: "0 2vmin 0 1vmin"
  },
  logo: {
    display: "flex",
  },
  title: {
    textAlign: "center",
    margin: "auto 1.5vmin",
    color: "white"
  },
  account: {
    display: "flex",
  }
});
