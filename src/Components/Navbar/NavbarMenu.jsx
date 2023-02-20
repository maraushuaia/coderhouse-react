import styles from "./Navbar.module.css";

const NavbarMenu = () => {
  return (
    <div>
      <ul className={styles.containerMenu}>
        <li>Inicio</li>
        <li>Causas en curso</li>
        <li>Causas históricas</li>
      </ul>
    </div>
  );
};

export default NavbarMenu;
