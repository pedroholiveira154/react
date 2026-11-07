import { NavLink } from "react-router-dom";


function Header() {
  return (
    <header className="site-header">
      <h1 className="site-brand">FilaZero</h1>
      <p className="site-tagline">Mais praticidade no atendimento da cantina</p>

      <nav className="nav site-nav justify-content-center" aria-label="Navegação principal">
        <NavLink to="/" className="nav-link">
          Início
        </NavLink>

        <NavLink to="/produtos" className="nav-link">
          Produtos
        </NavLink>

        <NavLink to="/sobre" className="nav-link">
          Sobre o projeto
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
