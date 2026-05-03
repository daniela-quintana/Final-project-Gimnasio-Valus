import { useNavigate } from "react-router-dom";
import "../../styles/Auth.css";

const ThanksPage = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h3
          style={{
            color: "#e07b20",
            fontSize: "1.3rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          ¡Gracias por tus comentarios!
        </h3>
        <p
          style={{
            color: "#cccccc",
            fontSize: "0.9rem",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Tu opinión es muy importante para nosotros y nos ayuda a seguir
          mejorando. ¡Nos alegra que seas parte de Valus!
        </p>
        <button className="auth-btn" onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default ThanksPage;
