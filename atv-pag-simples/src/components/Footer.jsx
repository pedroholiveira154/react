function Footer() {
    return (
        <footer className="container bg-red">
            <div className="row">

                {/* Coluna 1 - Company */}
                <div className="col-3">
                    <h4>Company</h4>
                    <a href="#">Sobre nós</a>
                    <a href="#">Contato</a>
                    <a href="#">Reservation</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Condition</a>
                </div>

                {/* Coluna 2 - Endereço */}
                <div className="col-3">
                    <h4>Endereço</h4>
                    <p>Av. Seila, Mogi das Cruzes-SP, Brasil</p>
                    <p>+012 345 67890</p>
                    <p>info@example.com</p>

                    <div>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

                {/* Coluna 3 - Aberto */}
                <div className="col-3">
                    <h4>Aberto:</h4>
                    <h5>Segunda à Sexta</h5>
                    <p>09h00 - 21h00</p>
                    <h5>Sábados:</h5>
                    <p>10h00 às 08h00</p>
                </div>

                {/* Coluna 4 - Newsletter */}
                <div className="col-3">
                    <h4>Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>

                    <div className="d-flex gap-2">
                        <input type="text" placeholder="Your email" className="form-control"/>
                        <button type="button" id="btn-footer" className="btn btn-dark rounded">SignUp</button>
                    </div>

                    <h1>😎LOGO😎</h1>
                </div>

            </div>
        </footer>
    )
}

export default Footer;