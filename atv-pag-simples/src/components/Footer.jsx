import { Link } from "react-router-dom";


function Footer() {
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
                        <Link to="/" className="footer-link">
                            Início
                        </Link>

                        <Link to="/produtos" className="footer-link">
                            Produtos
                        </Link>

                        <Link to="/sobre" className="footer-link">
                            Sobre o projeto
                        </Link>
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
