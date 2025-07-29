import { Link, useLocation } from "react-router-dom";
import estilos from "../Menu/Menu.module.css";

export default function Menu() {
  const location = useLocation();
  return (
    <nav className={estilos.nav}>
      <ul className={estilos.navList}>
        <li className={estilos.navItem}>
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? `${estilos.link} ${estilos.ativo}`
                : estilos.link
            }
          >
            Home
          </Link>
        </li>
        <li className={estilos.navItem}>
          <Link
            to="/sobre"
            className={
              location.pathname === "/sobre"
                ? `${estilos.link} ${estilos.ativo}`
                : estilos.link
            }
          >
            Sobre
          </Link>
        </li>
        <li className={estilos.navItem}>
          <Link
            to="/tipos-de-treino"
            className={
              location.pathname === "/tipos-de-treino"
                ? `${estilos.link} ${estilos.ativo}`
                : estilos.link
            }
          >
            Tipos de Treino
          </Link>
        </li>
        <li className={estilos.navItem}>
          <Link
            to="/tecnologia"
            className={
              location.pathname === "/tecnologia"
                ? `${estilos.link} ${estilos.ativo}`
                : estilos.link
            }
          >
            Tecnologia
          </Link>
        </li>
      </ul>
    </nav>
  );
}
