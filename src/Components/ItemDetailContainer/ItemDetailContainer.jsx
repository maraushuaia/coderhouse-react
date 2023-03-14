import { Box, Container} from "@mui/material";
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
    
    <Container maxWidth="md" style={{marginTop:"2em"}}>
      <Box>
          <Box style={{textAlign: "left"}}>
              <h3>Origen de la Infracción: {causaSelected.origen}</h3>
              <h4>Número de Causa: {causaSelected.nroCausa}</h4>
              <h4>Fecha de Infracción: {causaSelected.fechaInfraccion}</h4>
          </Box>
          <Box style={{textAlign:"center"}}>
               <img src={causaSelected.img} alt="" width="420em" height="420em" />
          </Box>

          <Box style={{textAlign: "left"}}>
            <h4>Importe de la Multa: ${causaSelected.importe}</h4>
            <span>Infracción: {causaSelected.infraccion}</span>
            <ItemCount stock={causaSelected.stock} onAdd={onAdd} />
          </Box>
      </Box>
    </Container>
    
  );
};

export default ItemDetailContainer;

