function Card({ titulo, descricao }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <article className="feature-card">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </article>
    </div>
  );
}

export default Card;
