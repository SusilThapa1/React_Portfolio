const Button = ({ type, bg, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`rounded-lg border border-cyan-300 bg-cyan-600 px-3 py-2 text-sm text-gray-200 shadow-lg transition-transform duration-700 hover:scale-110`}
    >
      {text}
    </button>
  );
};

export default Button;
