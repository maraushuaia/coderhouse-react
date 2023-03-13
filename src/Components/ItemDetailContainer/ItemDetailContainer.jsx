import React from "react";
import { useParams } from "react-router-dom";
import { causas } from "../../causasMock";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const causaSelected = causas.find((element) => element.id === Number(id));

  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad} productos `);
  };

  return (
    <div>
      <h1>{causaSelected.title}</h1>
      <img src={causaSelected.img} alt="" width="320em" height="320em" />
      <ItemCount stock={causaSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
