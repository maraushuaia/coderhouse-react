import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { causas } from "../../causasMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const { estado } = useParams();

  const [items, setItems] = useState([]);

  const causasFiltradas = causas.filter(
    (elemento) => elemento.estado === estado
  );

  useEffect(() => {
    const causasList = new Promise((resolve, reject) => {
      resolve(estado ? causasFiltradas : causas);
    });

    causasList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [estado]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
