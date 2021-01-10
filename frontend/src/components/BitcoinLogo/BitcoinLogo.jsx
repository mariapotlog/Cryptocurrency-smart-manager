import bitcoin from "./bitcoin_orange.png"
import { useStyles } from "./styles";

const BitcoinLogo = () => {
  const classes = useStyles();
  return <img className={classes.root} src={bitcoin} width="50px" height="50px" alt="logo" />
}

export default BitcoinLogo;
