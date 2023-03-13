import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { causas } from "../../causasMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  const causasFiltradas = causas.filter(
    (elemento) => elemento.category === categoryName
  );

  useEffect(() => {
    const causasList = new Promise((resolve, reject) => {
      resolve(categoryName ? causasFiltradas : causas);
    });

    causasList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
