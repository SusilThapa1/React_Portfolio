const Button = ({ type, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`rounded-lg border border-blue-400 bg-gradient-to-r from-cyan-400 to-blue-600 p-2 text-sm text-gray-200 shadow-lg transition-transform duration-700 hover:scale-105`}
    >
      {text}
    </button>
  );
};

export default Button;
