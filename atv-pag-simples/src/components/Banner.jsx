import banner from "../assets/banner.jpg";

function Banner() {
  return (
    <img
      src={banner}
      alt="Ambiente de cantina que representa a proposta de autoatendimento do FilaZero"
      className="banner img-fluid rounded mx-auto"
    />
  );
}

export default Banner;
