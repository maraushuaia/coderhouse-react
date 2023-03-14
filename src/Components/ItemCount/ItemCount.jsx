import { useState } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/material";


const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    
    

      
      <Box style={{marginTop:"2em", textAlign:"center"}}>
        <h2>{contador}</h2>
      <Stack direction="row" spacing={2} style={{flexDirection:"row", justifyContent:"center", marginTop:"2em"}}>
        <Button variant="contained" color="info" onClick={sumar}>Sumar</Button>
        <Button variant="contained" color="secondary" onClick={restar}>Restar</Button>
        <Button variant="contained" color="success" onClick={() => onAdd(contador)}>Agregar al carrito</Button>
      </Stack>
      </Box>
    
  );
};

export default ItemCount;