import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "../../styles/Auth.css";
import Button from "../common/Button";

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const initial = user?.name
    ? user.name[0].toUpperCase()
    : user?.email[0].toUpperCase();

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "#e8d5b0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
          }}
        >
          <span
            style={{ fontSize: "2.5rem", fontWeight: 700, color: "#e07b20" }}
          >
            {initial}
          </span>
        </div>

        <h3
          style={{
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "1.1rem",
            marginBottom: 4,
          }}
        >
          {user?.name || user?.email}
        </h3>
        <p style={{ color: "#cccccc", fontSize: "0.85rem", marginBottom: 30 }}>
          {user?.role || "Miembro Valus"}
        </p>

        <div className="auth-form">
          <div className="form-group">
            <label>Cambiar contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Repetir contraseña</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <br />
          <Button
          className={'cta-button'}
          onClick={handleLogout}
          text="Cerrar sesión"
          />
          <Button
            className={'ghost-button'}
            onClick={() => {}}
            text="Borrar cuenta"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
