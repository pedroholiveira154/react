import { useState } from 'react';

function Header() {
    const [paginaAtiva, setPaginaAtiva] = useState('Home');

    return (
        <header className="container text-center bg-red p-5 d-flex flex-column gap-3">
            <h1>FilaZero</h1>

            <nav className="nav justify-content-center">
                <a
                    href="#"
                    className={`nav-link ${paginaAtiva === 'Home' ? 'active' : ''}`}
                    onClick={() => setPaginaAtiva('Home')}
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
                    className={`nav-link ${paginaAtiva === 'Sobre Nós' ? 'active' : ''}`}
                    onClick={() => setPaginaAtiva('Sobre Nós')}
                >
                    Sobre Nós
                </a>
            </nav>
        </header>
    );
}

export default Header;