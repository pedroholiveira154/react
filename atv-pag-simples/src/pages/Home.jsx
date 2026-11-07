
import Card from "../components/Card";
import Banner from "../components/Banner";

function Home() {
  return (
    <>
      <section className="home-intro text-center">
        <span className="section-eyebrow">
          Autoatendimento para cantinas
        </span>

        <h2>Mais agilidade para aproveitar seu intervalo.</h2>

        <p>
          O FilaZero é uma proposta de sistema de autoatendimento que busca
          tornar a compra na cantina mais simples, organizada e prática.
        </p>
      </section>

      <Banner />

      <section className="content-section">
        <div className="section-heading">
          <span className="section-eyebrow">Por que FilaZero?</span>
          <h2>Uma experiência de compra mais simples</h2>
          <p>
            A proposta é reduzir etapas no atendimento presencial e dar
            mais autonomia ao cliente durante a escolha dos produtos.
          </p>
        </div>

        <div className="row g-4">
          <Card
            titulo="Mais organização"
            descricao="O autoatendimento ajuda a organizar o fluxo de pedidos e pode contribuir para diminuir a concentração de pessoas no balcão."
          />

          <Card
            titulo="Praticidade"
            descricao="A interface foi pensada para orientar o cliente durante a consulta ao cardápio e a seleção dos itens."
          />

          <Card
            titulo="Agilidade"
            descricao="Ao permitir que o próprio cliente monte seu pedido, o sistema busca tornar o processo de compra mais ágil."
          />
        </div>
      </section>

      <section className="highlight-section">
        <div>
          <span className="section-eyebrow">Como funciona</span>
          <h2>Da escolha à confirmação do pedido</h2>
          <p>
            O fluxo proposto permite consultar os produtos disponíveis,
            selecionar os itens desejados, revisar o pedido e avançar para
            a etapa de finalização, de acordo com os recursos implementados.
          </p>
        </div>

        <ol className="steps-list">
          <li><span>01</span> Consulte o cardápio e as categorias.</li>
          <li><span>02</span> Escolha os produtos e monte seu pedido.</li>
          <li><span>03</span> Revise os itens e siga para a finalização.</li>
        </ol>
      </section>
    </>
  );
}

export default Home;
