import "../../styles/Button.css";

const Button = ({ text = "Empieza", onClick }) => {
  return (
    <>
      <button className="cta-button" onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
