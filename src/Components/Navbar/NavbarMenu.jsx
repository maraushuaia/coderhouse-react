import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const NavbarMenu = () => {
  return (
    <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="inherit">
          Causas en Curso
        </Button>
        <Button variant="outlined" color="inherit">
          Causas Historicas
        </Button>
      </Stack>
    </Box>
  );
};

export default NavbarMenu;
