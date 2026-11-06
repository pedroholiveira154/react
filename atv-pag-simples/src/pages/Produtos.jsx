function Produtos() {
  return (
    <main className="container page-content">
      <header className="section-heading">
        <span className="section-eyebrow">Recursos do sistema</span>
        <h1 className="page-title">Funcionalidades</h1>
        <p className="page-lead">
          O FilaZero foi pensado para apoiar as principais etapas de uma compra
          na cantina, desde a consulta ao cardápio até a revisão do pedido.
        </p>
      </header>

      <div className="row g-4">
        <div className="col-12 col-md-6">
          <article className="info-panel">
            <h3>Consulta ao cardápio</h3>
            <p>
              Apresentação dos produtos organizados para facilitar a
              visualização das opções disponíveis ao cliente.
            </p>
          </article>
        </div>
        <div className="col-12 col-md-6">
          <article className="info-panel">
            <h3>Seleção de produtos</h3>
            <p>
              O cliente pode escolher os itens desejados e compor seu pedido
              diretamente pela interface de autoatendimento.
            </p>
          </article>
        </div>
        <div className="col-12 col-md-6">
          <article className="info-panel">
            <h3>Revisão do pedido</h3>
            <p>
              A etapa de conferência permite verificar os itens selecionados
              antes de avançar para a finalização.
            </p>
          </article>
        </div>
        <div className="col-12 col-md-6">
          <article className="info-panel">
            <h3>Gestão de produtos</h3>
            <p>
              Na parte administrativa prevista para o projeto, o gerenciamento
              de produtos e informações da cantina apoia a manutenção do
              catálogo.
            </p>
          </article>
        </div>
      </div>

      <section className="highlight-section">
        <div>
          <span className="section-eyebrow">Benefícios esperados</span>
          <h2>Mais autonomia durante a compra</h2>
          <p>
            Ao transferir a escolha dos produtos para uma interface de
            autoatendimento, a proposta é contribuir para um atendimento mais
            fluido e para uma melhor organização da rotina da cantina.
          </p>
        </div>
        <div>
          <h3 className="text-danger fw-bold">Importante</h3>
          <p className="page-lead">
            Os benefícios apresentados são objetivos do projeto. Os resultados
            reais, como a redução do tempo de espera, dependem de testes e
            validação em um ambiente de uso.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Produtos;
