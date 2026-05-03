import "../../styles/Plans.css";

const plans = [
  {
    id: 1,
    title: ["Open Box", "Planificación"],
    separator: " + ",
    features: [
      "Entrenamiento independiente",
      "Planificación en tu celular",
      "Horarios exclusivos",
      "Aforo reducido",
    ],
    prices: [
      "8 sesiones/mensual $45.000",
      "12 sesiones/mensual $60.000",
      "16 sesiones/mensual $80.000",
    ],
  },
  {
    id: 2,
    title: ["Entrenamiento", "Personalizado"],
    separator: " ",
    features: [
      "Programa personalizado",
      "Acompañamiento constante",
      "Agenda flexible",
      "Planificación en tu celular",
      "Sistema 1:3",
    ],
    prices: [
      "8 sesiones/mensual $90.000",
      "12 sesiones/mensual $110.000",
      "16 sesiones/mensual $135.000",
    ],
  },
];

const PlansPage = () => {
  return (
    <section className="plans-section">
      <p className="plans-subtitle">Planes</p>
      <div className="plans-container">
        {plans.map((plan) => (
          <div key={plan.id} className="plan-item">
            <h2 className="plan-title">
              <span>{plan.title[0]}</span>
              {plan.separator}
              <span>{plan.title[1]}</span>
            </h2>
            <div className="plan-body">
              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="plan-prices">
                {plan.prices.map((price, index) => (
                  <p key={index}>{price}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
        <button className="plans-btn">Contáctanos</button>
      </div>
    </section>
  );
};

export default PlansPage;