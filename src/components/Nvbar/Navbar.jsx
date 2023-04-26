
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">FerreShop</Link>

        <div className={styles.categories}>
          <Link to="/">Todos Los productos</Link>
          <Link to="/category/herramientas">Ferreteria</Link>
          <Link to="/category/buloneria">Buloneria</Link>
          <Link to="/category/electricidad">Electricidad</Link>
          <Link to="/category/pintureria">Pintureria</Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
};
