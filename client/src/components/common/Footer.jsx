import "../../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-center">
            <a href="/" className="logo">
              <img src="/public/favicon.svg" alt="Logotipo Valus" />
            </a>
            <h2 className="title">VALUS</h2>
          </div>
          <div className="footer-contact">
            <h4>CONTACTO</h4>
            <div className="contact-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#e3e3e3"
              >
                <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
              </svg>
              <p>Av. Arturo Prat 476, Valdivia, Los Ríos</p>
            </div>

            <div className="contact-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#e3e3e3"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
              <p>gimnasiovalus@gym.com</p>
            </div>
          </div>

          <div className="footer-social">
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <a
              href="https://instagram.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom-line" />
      </footer>
    </>
  );
};

export default Footer;
