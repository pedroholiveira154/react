function Header({ setPaginaAtiva, paginaAtiva }) {
    return (
        <header className="container text-center bg-red p-5 d-flex flex-column gap-3 text-white">
            <h1>FilaZero</h1>

            <nav className="nav justify-content-center">

                <a
                    href="../App.jsx"
                    className={`nav-link ${paginaAtiva === 'App' ? 'active' : ''}`}
                    onClick={() => setPaginaAtiva('App')}
                >
                    Home
                </a>

                <a
                    href="#"
                    className={`nav-link ${paginaAtiva === 'Produtos' ? 'active' : ''}`}
                    onClick={() => setPaginaAtiva('Produtos')}
                >
                    Produtos
                </a>

                <a
                    href="#"
                    className={`nav-link ${paginaAtiva === 'SobreNos' ? 'active' : ''}`}
                    onClick={() => setPaginaAtiva('SobreNos')}
                >
                    Sobre Nós
                </a>

            </nav>
        </header>
    );
}

export default Header;