import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: "flex",
    margin: "0",
    maxWidth: 290,
    minWidth: 285,
    padding: "10px",
    border: "1px solid rgb(242,242,242)",
    boxShadow: "rgba(0,0,0,0.09) 0px 10px 40px",
    "&:active": {
      backgroundColor: "#F5F5F5"
    },
  },
  priceDown: {
    color: "rgb(255,51,51)"
  },
  priceUp: {
    color: "rgb(25,140,25)"
  },
  change: {
    display: "flex",
  },
  title: {
    marginRight: "6px"
  }
});
