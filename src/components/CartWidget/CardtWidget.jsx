import Styles from "./CardtWidger.module.css";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";

export const CardtWidget = ({ItemCarrito}) => {

  return (
    <Box sx={{ flexGrow: 1, display: "flex", p:{ xs: 0, md: 2 } }}>
      <ShoppingCartIcon sx={{ fontSize:{xs: 20, md: 40 } }} />
      <h5>{ItemCarrito}</h5>
    </Box>
  );
};
