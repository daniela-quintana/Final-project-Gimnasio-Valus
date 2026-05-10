import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { createReview } from "../../services/api";
import Button from "../common/Button";
import "../../styles/Auth.css";

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!comment || rating === 0) return;
    if (!token) {
      navigate("/login");
      return;
    }
    const data = await createReview(rating, comment, token);
    if (data.id) {
      navigate("/thanks");
    } else {
      setError("Error al enviar la reseña");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <p
          style={{
            color: "#e07b20",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 10,
            fontSize: "0.85rem",
          }}
        >
          Feedback
        </p>
        <h3 className="auth-title">Déjanos tu reseña</h3>
        <p
          style={{
            color: "#cccccc",
            fontSize: "0.85rem",
            textAlign: "center",
            marginBottom: 16,
            lineHeight: 1.5,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 16,
            justifyContent: "center",
          }}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{
                fontSize: "1.6rem",
                cursor: "pointer",
                color: star <= rating ? "#e07b20" : "#555",
              }}
            >
              ★
            </span>
          ))}
        </div>
        <div className="auth-form">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Deja tu comentario aquí..."
            rows={5}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 8,
              padding: "12px 14px",
              color: "#ffffff",
              fontSize: "0.85rem",
              resize: "none",
              outline: "none",
            }}
          />
          {error && (
            <p style={{ color: "#ff6b6b", fontSize: "0.85rem" }}>{error}</p>
          )}
          <Button
            className={"cta-button"}
            onClick={handleSubmit}
            text="Enviar"
          />
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
