function Header({ setPaginaAtiva, paginaAtiva }) {
  const paginas = [
    { id: "App", nome: "Início" },
    { id: "Produtos", nome: "Funcionalidades" },
    { id: "SobreNos", nome: "Sobre o projeto" },
  ];

  return (
    <header className="site-header">
      <h1 className="site-brand">FilaZero</h1>
      <p className="site-tagline">Mais praticidade no atendimento da cantina</p>

      <nav className="nav site-nav justify-content-center" aria-label="Navegação principal">
        {paginas.map((pagina) => (
          <button
            key={pagina.id}
            type="button"
            className={`nav-link ${paginaAtiva === pagina.id ? "active" : ""}`}
            aria-current={paginaAtiva === pagina.id ? "page" : undefined}
            onClick={() => setPaginaAtiva(pagina.id)}
          >
            {pagina.nome}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
