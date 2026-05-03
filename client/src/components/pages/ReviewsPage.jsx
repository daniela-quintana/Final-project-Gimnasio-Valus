import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Reviews.css";

const reviews = [
  {
    id: 1,
    name: "Mario Castaneda",
    stars: 5,
    quote:
      '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"',
    image: "/src/assets/imgs/photo-1724160167551-2ffc3d7ca809.avif",
  },
  {
    id: 2,
    name: "Laura Méndez",
    stars: 5,
    quote:
      '"El mejor gimnasio en el que he entrenado, el equipo es increíble y los resultados hablan por sí solos"',
    image: "/src/assets/imgs/premium_photo-1661284821625-9400498df354.avif",
  },
  {
    id: 3,
    name: "Carlos Rojas",
    stars: 4,
    quote:
      '"Excelente ambiente, profesionales de primer nivel y una atención personalizada que marca la diferencia"',
    image: "/src/assets/imgs/photo-1722925541142-5db2668ca492.avif",
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
      <p className="reviews-subtitle">Reseñas</p>
      <h2 className="reviews-title">Nuestros alumnos hablan</h2>
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
      <button className="reviews-btn" onClick={() => navigate("/feedback")}>
        Deja tu comentario
      </button>{" "}
    </section>
  );
};

export default ReviewsPage;
