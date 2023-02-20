import CartWidget from "./CartWidget";
import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <Logo />
      <NavbarMenu />
      <CartWidget />
    </div>
  );
};

export default Navbar;
