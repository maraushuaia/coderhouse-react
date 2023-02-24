import CartWidget from "./CartWidget";
import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";
import styles from "./Navbar.module.css";
import Saludo from "./Saludo";
import { Box } from "@mui/system";

const Navbar = () => {
  return (
    <Box container>
      <Box className={styles.containerNavbar}>
        <Logo />
        <NavbarMenu />
        <CartWidget />
      </Box>
      <Box align="center">
        <Saludo greeting={"Bienvenido: Rodrigo"} />
      </Box>
    </Box>
  );
};

export default Navbar;
