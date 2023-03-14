import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const pages = ["En Curso", "Archivadas", "Noticias"];

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
            <Link to="/estado/"></Link>
            {page}
          </Button>
        ))}
        {console.log({ pages })}
      </Box>
    </Box>
  );
};
export default OptionsMenu;
