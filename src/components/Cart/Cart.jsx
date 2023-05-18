import { Button } from "@mui/material";
import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  clearCartWithAlert,
  deleteProductById,
  total,
  navigate,
}) => {
  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2 className="cart-items-title">Productos en el carrito:</h2>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt="" className="cart-item-image" />
            <div className="cart-item-info">
              <h2 className="cart-item-name">{item.title}</h2>
              <h3 className="cart-item-quantity">Cantidad {item.quantity}</h3>
              {item.quantity > 1 ? (
                <>
                  <h3 className="cart-item-quantity">
                    Precio unitario ${item.price}.-
                  </h3>
                  <h3 className="cart-item-total">
                    Total ${item.price * item.quantity}.-
                  </h3>
                </>
              ) : (
                <h3 className="cart-item-total">Precio ${item.price}.-</h3>
              )}

              <Link to={`/itemDetail/${item.id}`}>
                <Button variant="contained" className="cart-item-remove-btn" sx={{ textTransform: "none" }}>
                  Ver detalle
                </Button>
              </Link>

              <Button
                variant="contained"
                size="small"
                onClick={() => deleteProductById(item.id)}
                className="cart-item-remove-btn"
              >
                Quitar
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2 className="cart-summary-title">Resumen de la Compra</h2>
        <div className="cart-summary-details">
          <p>Cantidad de productos: {cart.length}</p>
          <p>Precio total: ${total}</p>
        </div>
        {cart.length > 0 ? (
          <div className="cart-actions">
            <Button
              variant="contained"
              onClick={() => navigate("/checkout")}
              className="cart-action-btn"
            >
              Terminar la compra
            </Button>
            <Button
              variant="contained"
              onClick={clearCartWithAlert}
              className="cart-action-btn"
            >
              Vaciar carrito
            </Button>
          </div>
        ) : (
          <Link to="/" className="cart-empty-link">
            <Button variant="contained" className="cart-action-btn">
              Agregar productos
            </Button>
          </Link>
        )}
        <h2 className="cart-total">Total: ${total}</h2>
      </div>
    </div>
  );
};

export default Cart;