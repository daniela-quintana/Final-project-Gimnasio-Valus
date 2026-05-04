import { useNavigate } from "react-router-dom";
import "../../styles/Auth.css";
import "../../styles/FeedBack.css";
import Button from "../common/Button";

const ThanksPage = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h3 className="thanks-title">¡Gracias por tus comentarios!</h3>

        <p className="thanks-text">
          Tu opinión es muy importante para nosotros y nos ayuda a seguir
          mejorando. ¡Nos alegra que seas parte de Valus!
        </p>
        <Button onClick={() => navigate("/")} text=" Volver al inicio" />
      </div>
    </div>
  );
};

export default ThanksPage;
