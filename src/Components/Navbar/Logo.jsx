import styles from "./Navbar.module.css";

const Logo = () => {
  return (
    <div style={{ display: "flex" }}>
      <img
        src="https://res.cloudinary.com/dtvrg3by2/image/upload/v1676926134/logo_es7lt2.png"
        alt=""
        style={{ width: "42px", height: "42px", objectFit: "cover" }}
      />
      <h2 className={styles.logoText}>Juzgado de Faltas</h2>
    </div>
  );
};

export default Logo;
