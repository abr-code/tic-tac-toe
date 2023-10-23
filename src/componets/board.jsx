import Square from "./square";
import { useState } from "react";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {squares.map((square, index) => (
          <Square key={index} index={index}>
            {square}
          </Square>
        ))}
      </div>
    </>
  );
}

export default Board;
