import { Box, Container } from "@mui/material";
import CardCausa from "../CardCausa/CardCausa";

const ItemListContainer = ({ greeting }) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
          paddingTop: "2em",
        }}
      >
        <CardCausa></CardCausa>
        <CardCausa></CardCausa>
        <CardCausa></CardCausa>
      </Box>
      <Box></Box>
    </Container>
  );
};

export default ItemListContainer;
