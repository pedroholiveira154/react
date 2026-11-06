import { useState } from "react";

import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

import Produtos from "./pages/produtos";
import SobreNos from "./pages/SobreNos";


import './App.css'

function App() {

  const [paginaAtiva, setPaginaAtiva] = useState('App');

  return (

    <div className="m-5">
      <Header
        paginaAtiva={paginaAtiva}
        setPaginaAtiva={setPaginaAtiva}
      />
      {paginaAtiva === 'App' && (
        <main className="container d-flex flex-column bg-white p-5 gap-3">
          <Banner />
          <div className="row g-3">
            <Card titulo="Fila" descricao="O FilaZero permite a diminuição de até 50% da espera em fileiras" />
            <Card titulo="Praticidade" descricao="O FilaZero conta com um processo intuitivo para comprar sem dores de cabeça" />
            <Card titulo="Pagamento" descricao="O FilaZero permite pagamentos simples e de várias formas" />
          </div>
        </main>


      )}

      {paginaAtiva === 'Produtos' && <Produtos />}

      {paginaAtiva === 'SobreNos' && <SobreNos />}

      <Footer />
    </div>

  )

}

export default App;