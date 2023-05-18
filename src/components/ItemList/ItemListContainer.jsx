import { useState, useEffect } from "react";
import ItemList  from "./ItemList";
import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import Footer from "../Footer/Footer";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(db, "products");

    if (categoryName) {
      const itemsCollectionFiltered = query(
        itemCollection,
        where("category", "==", categoryName)
      );
      consulta = itemsCollectionFiltered;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });

        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div>
      {items.length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PropagateLoader color="#b87c58" size={50} />
        </div>
      ) : (
        <ItemList items={items} />
      )}
      <Footer/>
    </div>
  );
};

export default ItemListContainer;
