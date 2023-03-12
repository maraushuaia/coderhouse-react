import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CartWidget = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <IconButton size="large" aria-label="show 2 products" color="inherit">
        <Badge badgeContent={2} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default CartWidget;
