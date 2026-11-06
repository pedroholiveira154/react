function Card({titulo, descricao}) {
    return (
        <div className="col-12 col-sm-6 col-lg-4">
            <div className="card p-3 bg-dark-red text-white">
                <h2>{titulo}</h2>
                <p>{descricao}</p>
            </div>
        </div>
    );
}

export default Card;