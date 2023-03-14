import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Box>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "block", sm: "block" } }}
        >
          JUZGADO DE FALTAS
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
      </Link>
    </Box>
  );
};

export default Logo;
