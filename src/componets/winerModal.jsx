const WinerModal = ({ winer, resetGame, children }) => {
  if (winer === null) return null;

  const result = winer ? "Winner" : "Tie";
  const winerName = winer ? children : "";

  const handleReset = () => {
    resetGame();
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-black text-white  w-[300px] h-[300px] overflow-hidden grid place-content-center">
        <h1 className="text-center mb-7">{result}</h1>
        <h3 className="text-center mb-7">{winerName}</h3>

        <button
          onClick={handleReset}
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default WinerModal;
