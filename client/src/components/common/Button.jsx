import "../../styles/Button.css";

const Button = ({ text, disabled, onClick, className }) => {
  return (
    <>
      <button className={className} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </>
  );
};

export default Button;
