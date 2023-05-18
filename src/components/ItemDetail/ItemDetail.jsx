import React from "react";
import styles from "./ItemDetail.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CounterContainer from "../Counter/CounterContainer";

export const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={product.img} alt="" />
      </div>

      <div className={styles.detailContainer}>
        <h2 className={styles.title}>
          <span className={styles.label}></span> {product.title}
        </h2>
        <h2 className={styles.description}>
          <span className={styles.label}></span> {product.descripcion}
        </h2>
        <h2 className={styles.price}>
          <span className={styles.label}>Precio:</span> ${product.price}.-
        </h2>
      </div>

      {product.stock > 0 ? (
        <div className={styles.counterContainer}>
          <CounterContainer
            stock={product.stock}
            onAdd={onAdd}
            initial={cantidadTotal}
          />
        </div>
      ) : (
        <h2>No hay stock</h2>
      )}

      <div className={styles.buttonContainer}>
        <Link to="/">
          <Button className={styles.link} variant="contained">
            home
          </Button>
        </Link>

        <Link to="/cart">
          <Button className={styles.link} variant="contained">
            Ir a Carrito
          </Button>
        </Link>
      </div>
    </div>
  );
};

 