import { Box } from "@mui/system";

const ItemListContainer = ({ greeting }) => {
  return (
    <Box>
      <h3>{greeting}</h3>
    </Box>
  );
};

export default ItemListContainer;
