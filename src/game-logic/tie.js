export const isTie = (board) => {
  return board.every((square) => square !== null);
};
