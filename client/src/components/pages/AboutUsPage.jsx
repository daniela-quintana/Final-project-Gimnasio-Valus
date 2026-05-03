import "../../styles/AboutUs.css";

const features = [
  {
    id: 1,
    title: "Fuerza y Rendimiento",
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    image: "/src/assets/imgs/photo-1554886729-fe8d4499a108.avif",
  },
  {
    id: 2,
    title: "Fuerza y Rendimiento",
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    image: "/src/assets/imgs/photo-1545334894-9c7a7ccefaf8.avif",
  },
  {
    id: 3,
    title: "Fuerza y Rendimiento",
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    image: "/src/assets/imgs/photo-1621057621391-7ed446a24b41.avif",
  },
];

const AboutUsPage = () => {
  return (
    <section className="about-section">
      <p className="about-subtitle">Conócenos</p>
      <h2 className="about-title">¿Por qué entrenar con nosotros?</h2>
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