// eslint-disable-next-line react/prop-types
const Button = ({ onClick = () => {}, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
