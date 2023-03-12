import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const pages = ["Causas en Curso", "Causas Históricas", "Noticias"];

const OptionsMenu = () => {
  return (
    <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            sx={{
              my: 2,
              color: "white",
              display: "block",
            }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
export default OptionsMenu;
