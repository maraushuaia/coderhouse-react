import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const Logo = () => {
  return (
    <Box>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: "block", sm: "block" } }}
      >
        JUZGADO DE FALTAS
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );
};

export default Logo;
