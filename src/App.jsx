import "./App.css";
import Square from "./componets/square.jsx";
import WinerModal from "./componets/winerModal.jsx";
import { useState } from "react";
import { TURN } from "./game-logic/constants";
import { isWinner } from "./game-logic/isWinner";
import { isTie } from "./game-logic/tie";

function App() {
  const [currentTurn, setTurn] = useState(TURN.X);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winer, setWiner] = useState(null);

  const updateBoard = (idx) => {
    if (board[idx] || winer) return;
    const newBoard = [...board];
    newBoard[idx] = currentTurn;
    setBoard(newBoard);
    if (isWinner(newBoard)) {
      setWiner(true);
      return;
    } else if (isTie(newBoard)) {
      setWiner(false);
      return;
    }

    setTurn(currentTurn === TURN.X ? TURN.O : TURN.X);
  };

  function reset() {
    setBoard(Array(9).fill(null));
    setWiner(null);
    setTurn(TURN.X);
  }

  return (
    <main className="grid place-items-center h-screen bg-blue-950">
      <div>
        <h1 className="text-6xl pb-7 text-white">Tic Tac Toe</h1>
        <div className="grid grid-cols-3 gap-2">
          {board.map((square, index) => (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          ))}
        </div>
      </div>
      <div className="flex justify-center text-white text-7xl">
        {winer ? `Winer: ${currentTurn}` : `Turn: ${currentTurn}`}
      </div>
      <div className="flex justify-center text-white text-7xl">
        <WinerModal winer={winer} resetGame={reset}>
          {currentTurn}
        </WinerModal>
      </div>
    </main>
  );
}

export default App;
