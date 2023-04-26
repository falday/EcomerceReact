
import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const {codigo} = useParams()

  useEffect(() => {
    let encontrado = products.find((prod) => prod.codigo === Number(codigo));
      setProduct(encontrado);
  }, [codigo]);

 /*  const onAdd = (cantidad)=>{
    let data = {
      ...product,
      quantity: cantidad
    }
    console.log(data) */
    

  return (
    <div>
      <ItemDetail product={product}  />
    </div>
  );
};
