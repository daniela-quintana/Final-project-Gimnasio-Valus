import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "../../styles/Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = async () => {
    if (!email || !password) return;
    const data = await login(email, password);
    if (data.message) setError(data.message);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">
          <img src="/favicon.svg" alt="Valus logo" />
          <h2>VALUS</h2>
        </div>
        <h3 className="auth-title">¡Bienvenido a Gimnasio Valus!</h3>
        <div className="auth-form">
          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p style={{ color: "#ff6b6b", fontSize: "0.85rem" }}>{error}</p>}
          <button className="auth-btn" onClick={handleSubmit}>
            Iniciar sesión
          </button>
        </div>
        <p className="auth-forgot">¿Olvidaste tu contraseña?</p>
        <p className="auth-footer">
          ¿Aun no tienes una cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;