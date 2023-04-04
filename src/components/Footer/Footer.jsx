import Styles from "./Footer.module.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const Footer = () => {
  return (
    <AppBar position="Button">
      <Container maxWidth="xl">
        <Box
          sx={{
            flexGrow: 1,

            display: { xs: "flex", md: "flex" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              flexDirection: "column",
              display: { xs: "flex", md: "flex" },
            }}
          >
            <Typography variant="h6" Wrap component="a">
              Horario de atención
            </Typography>
            <div>
              <p>Lunes - Viernes: 8am - 5pm</p>
              <p>Sábado: 9am - 2pm Domingo: cerrado</p>
            </div>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              flexDirection: "column",
              display: { xs: "flex", md: "flex" },
            }}
          >
            <Typography variant="h6" noWrap component="a">
              Contacto
            </Typography>
            <div>
              <p>Dirección: 123 Main Street, Ciudad, Estado 12345</p>
              <p>Teléfono: (123) 456-7890</p>
              <p>Email: info@tuferreteria.com</p>
            </div>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              flexDirection: "column",
              display: { xs: "flex", md: "flex" },
            }}
          >
            <Typography variant="h6" noWrap component="a">
              Nuestras Redes
            </Typography>
            <div>
              <p href="#">Facebook</p>
              <p href="#">Twitter</p>
              <p href="#">Instagram</p>
            </div>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
