import React, { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";


export const ItemDetailContainer = () => {
  
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);


  useEffect(() => {
    const itemCollection = collection(db, "products");

    console.log(itemCollection)
console.log(id)

      const refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) =>
        setProduct({
          ...res.data(),
          id: res.id, 
        })
      )
      .catch((err) => console.log(err)) 
  }, [id]); 
 
  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    agregarAlCarrito(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Producto agregado`,
      showConfirmButton: true,
      timer: 1500,
    });
  };

  let cantidadTotal = getQuantityById(product.id);

  return (
    <div>
      <ItemDetail
        product={product}
        onAdd={onAdd}
        cantidadTotal={cantidadTotal}
      />
      <Footer/>
    </div>
  );
};
