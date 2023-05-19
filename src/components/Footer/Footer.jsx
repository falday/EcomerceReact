import React from "react";
import { styled } from "@mui/system";
import { Typography, Link, Grid, Container } from "@mui/material";

const FooterContainer = styled("footer")`
  background-color: #b87c58a3;
  padding: 2rem;
  margin-top: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Síguenos en redes sociales:
            </Typography>
            <ul>
              <li>
                <Link
                  href="https://www.facebook.com/FerreShop"
                  color="inherit"
                  target="_blank"
                >
                  Facebook
                </Link>
              </li>
              
              <li>
                <Link
                  href="https://www.instagram.com/FerreShop"
                  color="inherit"
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Horarios de atención:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lunes a Viernes: 8:00 AM - 6:00 PM
            </Typography>
            <Typography variant="body1" gutterBottom>
              Sábados: 9:00 AM - 1:00 PM
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ marginTop: "20px" }}
        >
          &copy; {new Date().getFullYear()} FerreShop. Todos los derechos
          reservados.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
