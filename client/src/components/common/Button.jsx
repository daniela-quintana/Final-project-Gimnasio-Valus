import "../../styles/Button.css";

const Button = ({ text, disabled, onClick }) => {
  return (
    <>
      <button className="cta-button" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </>
  );
};

export default Button;
