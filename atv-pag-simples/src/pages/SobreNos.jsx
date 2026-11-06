import Card from "../components/Card";

import '../App.css'
function SobreNos() {
    return (
        <main className="container d-flex flex-column bg-white p-5 gap-3">
            <div className="row g-3">
              <Card titulo="Sobre Nós" descricao="O FilaZero se resume na implementação de um totem de auto-atendimento na cantina, consistindo" />
            </div>
        </main>
    );
}

export default SobreNos;