
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    display: "flex",
    backgroundColor: "#FAFAFA",
    fontSize: "18px",
    padding: "5px 5px 5px 5px",
    borderBottom: " 1px solid rgb(242,242,242)",
    boxShadow: "rgba(0,0,0,0.06) 0px 0px 40px",
    minHeight: "65px",
    "&:hover": {
      backgroundColor: "#F5F5F5"
    }
  },
  container: {
    display: "flex"
  },
  coinImage: {
    width: "50px",
    height: "50px",
    marginRight: "30px"
  },
  name: {
    margin: "auto 1px",
    color: "#76808F",
  },
  star: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px"
  },
  symbol: {
    margin: "auto 10px auto 1px",
  },
  lastPrice: {
    margin: "auto 0"
  },
  daily: {
    margin: "auto 0 auto 0"
  },
  priceDown: {
    color: "rgb(255,51,51)"
  },
  priceUp: {
    color: "rgb(25,140,25)"
  },
  percentage: {
    display: "flex"
  },
  chart: {
    marginLeft: "20px"
  }
})