import CartWidget from "./CartWidget";
import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";
import styles from "./Navbar.module.css";
import { Box } from "@mui/system";

const Navbar = () => {
  return (
    <Box>
      <Box className={styles.containerNavbar}>
        <Logo />
        <NavbarMenu />
        <CartWidget />
      </Box>
    </Box>
  );
};

export default Navbar;
