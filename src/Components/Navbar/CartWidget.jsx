import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Box } from "@mui/material";

const CartWidget = (greeting) => {
  return (
    <Box>
      <ShoppingBasketIcon style={{ color: "white", height: "2" }} />
    </Box>
  );
};

export default CartWidget;
