import "../../styles/AboutUs.css";

const features = [
  {
    id: 1,
    title: "Fuerza y Rendimiento",
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    image: "/src/assets/imgs/aboutus1.avif",
  },
  {
    id: 2,
    title: "Fuerza y Rendimiento",
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    image: "/src/assets/imgs/aboutus2.avif",
  },
  {
    id: 3,
    title: "Fuerza y Rendimiento",
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    image: "/src/assets/imgs/aboutus3.avif",
  },
];

const AboutUsPage = () => {
  return (
    <section className="about-section">
      <h4 className="about-subtitle">Conócenos</h4>
      <h3 className="about-title">¿Por qué entrenar con nosotros?</h3>
      <p className="about-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="about-grid">
        {features.map((feature) => (
          <div key={feature.id} className="about-card">
            <img src={feature.image} alt={feature.title} />
            <div className="about-card-overlay">
              <h3 className="about-card-title">{feature.title}</h3>
              <p className="about-card-text">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsPage;
