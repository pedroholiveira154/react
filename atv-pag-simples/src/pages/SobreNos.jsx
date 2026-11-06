function SobreNos() {
  return (
    <main className="container page-content">
      <header className="section-heading">
        <span className="section-eyebrow">Conheça o FilaZero</span>
        <h1 className="page-title">Sobre o projeto</h1>
        <p className="page-lead">
          O FilaZero é um projeto acadêmico de Desenvolvimento de Sistemas que
          propõe o uso de um sistema de autoatendimento para cantinas,
          inspirado nos totens encontrados em redes de alimentação.
        </p>
      </header>

      <section className="row g-4">
        <div className="col-12 col-lg-6">
          <article className="info-panel">
            <h3>O problema</h3>
            <p>
              Em horários de intervalo, a concentração de estudantes no balcão
              pode aumentar o tempo de espera e dificultar a organização dos
              pedidos. O FilaZero parte desse cenário para estudar uma
              alternativa digital ao atendimento tradicional.
            </p>
          </article>
        </div>
        <div className="col-12 col-lg-6">
          <article className="info-panel">
            <h3>O objetivo</h3>
            <p>
              O objetivo é oferecer uma interface clara para que o próprio
              cliente consulte o cardápio, selecione produtos e revise sua
              compra, contribuindo para um fluxo de atendimento mais organizado.
            </p>
          </article>
        </div>
        <div className="col-12">
          <article className="info-panel">
            <h3>Desenvolvimento e proposta</h3>
            <p>
              O projeto reúne conceitos de desenvolvimento web e organização
              de informações para representar o processo de compra em uma
              cantina. A proposta é evoluir a experiência de atendimento com
              recursos digitais, mantendo a navegação simples e acessível.
              As funcionalidades descritas no site devem ser entendidas de
              acordo com o estágio de implementação e validação do sistema.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default SobreNos;
