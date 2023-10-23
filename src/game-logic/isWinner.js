import { BOARD_SIZE } from "./constants";
function isWinner(board) {
  let match = 1;
  //compare rows
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 1; j < BOARD_SIZE; j++) {
      if (board[i * BOARD_SIZE] === null || board[i * BOARD_SIZE + j] === null)
        continue;
      if (board[i * BOARD_SIZE] !== board[i * BOARD_SIZE + j]) continue;
      match++;
      if (match === BOARD_SIZE) {
        return true;
      }
    }
    match = 1;
  }

  //compare columns
  match = 1;
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 1; j < BOARD_SIZE; j++) {
      if (board[i] === null || board[j * BOARD_SIZE + i] === null) continue;
      if (board[i] !== board[j * BOARD_SIZE + i]) continue;
      match++;

      if (match === BOARD_SIZE) {
        return true;
      }
    }
    match = 1;
  }

  // Compare primary diagonal
  match = 1;
  for (let i = 1; i < BOARD_SIZE; i++) {
    if (board[0] === null) continue;
    if (board[0] !== board[i * BOARD_SIZE + i]) continue;
    match++;
    if (match === BOARD_SIZE) {
      return true;
    }
  }

  //compare secondary diagonal
  match = 1;
  for (let i = 1; i < BOARD_SIZE; i++) {
    let j = BOARD_SIZE - 1 - i;

    if (board[BOARD_SIZE - 1] === null) continue;
    if (board[BOARD_SIZE - 1] !== board[i * BOARD_SIZE + j]) continue;
    match++;
    if (match === BOARD_SIZE) {
      return true;
    }
  }

  return false;
}

export { isWinner };
