function Footer({ setPaginaAtiva }) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <section>
          <h2 className="footer-brand">FilaZero</h2>
          <p className="footer-copy">
            Uma proposta de autoatendimento para tornar a experiência de compra
            na cantina mais prática e organizada.
          </p>
        </section>

        <nav aria-label="Navegação do rodapé">
          <h3 className="footer-heading">Navegação</h3>
          <div className="footer-nav">
            <button type="button" className="footer-link" onClick={() => setPaginaAtiva("App")}>
              Início
            </button>
            <button type="button" className="footer-link" onClick={() => setPaginaAtiva("Produtos")}>
              Funcionalidades
            </button>
            <button type="button" className="footer-link" onClick={() => setPaginaAtiva("SobreNos")}>
              Sobre o projeto
            </button>
          </div>
        </nav>

        <section>
          <h3 className="footer-heading">Sobre a proposta</h3>
          <p className="footer-contact">
            O projeto busca otimizar o fluxo de pedidos por meio de uma
            experiência de autoatendimento simples e intuitiva.
          </p>
        </section>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FilaZero. Projeto acadêmico.</p>
        <p>Desenvolvido para apresentar uma nova experiência na cantina.</p>
      </div>
    </footer>
  );
}

export default Footer;
