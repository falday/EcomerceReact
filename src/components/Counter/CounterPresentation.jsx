import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CounterPresentation = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>

      <Button variant="contained" onClick={restar}>
        Restar
      </Button>
      <h2>{counter}</h2>
      <Button variant="contained" onClick={sumar}>
        Sumar
      </Button>

      <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}></div>
      <Button startIcon={<ShoppingCartIcon />} variant="contained" onClick={() => onAdd(counter)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default CounterPresentation;
