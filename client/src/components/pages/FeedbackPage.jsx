import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Auth.css";
import "../../styles/FeedBack.css";
import Button from "../common/Button";

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const isFormValid = () => {
    return comment.trim() !== "" && rating > 0;
  };

  const handleSubmit = () => {
    if (!isFormValid()) return;
    navigate("/thanks");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h4 className="feedback-title">Feedback</h4>
        <h3 className="auth-title">Déjanos tu reseña</h3>
        <p className="feedback-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className="feedback-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={`star ${star <= rating ? "active" : ""}`}
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
            className="feedback-text-area"
          />
          <Button
            onClick={handleSubmit}
            text="Enviar"
            disabled={!isFormValid()}
          />
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
