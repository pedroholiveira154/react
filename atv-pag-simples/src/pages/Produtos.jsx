
import Card from "../components/Card";
import Banner from "../components/Banner";

import '../App.css'
function Produtos() {
    return (
        <main className="container d-flex flex-column bg-white p-5 gap-3">
          <Banner />
            <div className="row g-3">
              <Card titulo="Fila" descricao="O FilaZero permite a diminuição de até 50% da espera em fileiras" />
              <Card titulo="Praticidade" descricao="O FilaZero conta com um processo intuitivo para comprar sem dores de cabeça" />
              <Card titulo="Pagamento" descricao="O FilaZero permite pagamentos simples e de várias formas" />
            </div>
        </main>
    );
}

export default Produtos;