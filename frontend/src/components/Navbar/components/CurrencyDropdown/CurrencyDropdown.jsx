import { useState, useContext } from "react"
import { Button, Menu, MenuItem, Typography } from '@material-ui/core';

import { CurrencyContext } from "contexts";

import { useSupportedCurrencies } from "./utils"
import { useStyles } from "./styles";


const CurrencyDropdown = () => {
  const { currencies } = useSupportedCurrencies()
  const { currency, setCurrency } = useContext(CurrencyContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();


  const handleChange = (e) => {
    handleClose()
    setCurrency(e.target.textContent.toLowerCase());
  };

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button
        className={classes.title}
        aria-controls="menu"
        aria-haspopup="true"
        onClick={(e) => handleClick(e)}
      >
        <Typography variant="subtitle1">{currency.toUpperCase()}</Typography>
      </Button>
      <Menu
        id="menu"
        anchorEl={anchorEl} q
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.selectEmpty}
      >
        {currencies.map(currency => (
          <MenuItem
            key={currency.value}
            onClick={handleChange}
          >
            {currency.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default CurrencyDropdown;
