import { Box } from "@mui/material";
import styles from "./Navbar.module.css";

const NavbarMenu = () => {
  return (
    <Box>
      <ul className={styles.containerMenu}>
        <li>Inicio</li>
        <li>Causas en curso</li>
        <li>Causas históricas</li>
      </ul>
    </Box>
  );
};

export default NavbarMenu;
