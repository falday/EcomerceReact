import { ThemeProvider } from "@mui/material/styles";
import React from 'react'
import { createContext, useEffect, useState } from "react";

export const ColoresCss = createContext();
  

const ColoresCssProvider = ({ children }) => {
  const theme = {
    palette: {
      primary: {
        main: "#b87c58a3",
      },
      secondary: {
        main: "#ffffff",
      },
    },
  };
};

