import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "../../styles/Auth.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { register } = useContext(AuthContext);

  const handleSubmit = async () => {
    if (!name || !email || !password) return;
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    const data = await register(name, email, password);
    if (data.message && !data.token) setError(data.message);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">
          <img src="/favicon.svg" alt="Valus logo" />
          <h2>VALUS</h2>
        </div>
        <h3 className="auth-title">¡Únete a Gimnasio Valus!</h3>
        <div className="auth-form">
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className="form-group">
            <label>Repite contraseña</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <p style={{ color: "#ff6b6b", fontSize: "0.85rem" }}>{error}</p>}
          <button className="auth-btn" onClick={handleSubmit}>
            Registrarse
          </button>
        </div>
        <p className="auth-footer">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;