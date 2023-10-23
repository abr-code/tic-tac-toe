function Square({ children, index, updateBoard }) {
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div
      onClick={handleClick}
      className="m-auto h-20 w-20 border-4 border-violet-600 bg-transparent grid place-content-center"
    >
      <span className="text-4xl font-semibold text-white">{children}</span>
    </div>
  );
}

export default Square;
