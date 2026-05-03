import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Reviews.css";
import Button from "../common/Button";

const reviews = [
  {
    id: 1,
    name: "Mario Castaneda",
    stars: 5,
    quote:
      '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"',
    image: "/src/assets/imgs/review1.avif",
  },
  {
    id: 2,
    name: "Laura Méndez",
    stars: 5,
    quote:
      '"El mejor gimnasio en el que he entrenado, el equipo es increíble y los resultados hablan por sí solos"',
    image: "/src/assets/imgs/review2.avif",
  },
  {
    id: 3,
    name: "Carlos Rojas",
    stars: 4,
    quote:
      '"Excelente ambiente, profesionales de primer nivel y una atención personalizada que marca la diferencia"',
    image: "/src/assets/imgs/review3.avif",
  },
];

const ReviewsPage = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const review = reviews[current];

  return (
    <section className="reviews-section">
      <h4 className="reviews-subtitle">Reseñas</h4>
      <h3 className="reviews-title">Nuestros alumnos hablan</h3>
      <div className="reviews-card">
        <img src={review.image} alt={review.name} />
        <div className="reviews-card-overlay">
          <div className="reviews-stars">
            {"★".repeat(review.stars)}
            {"☆".repeat(5 - review.stars)}
          </div>
          <p className="reviews-quote">{review.quote}</p>
          <span className="reviews-author">{review.name}</span>
        </div>
      </div>
      <Button onClick={() => navigate("/feedback")} text="Deja tu comentario" />
    </section>
  );
};

export default ReviewsPage;
