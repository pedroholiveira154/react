import banner from '../assets/banner.jpg'

function Banner() {
    return (
        <img 
            src={banner}
            alt="Logo"
            className="banner img-fluid w-100 rounded mx-auto d-block"
        />
    );
}

export default Banner;