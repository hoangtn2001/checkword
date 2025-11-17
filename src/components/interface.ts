interface boardState {
  board: string[];
  pos: number;
  check: number;
  word: string;
}
export interface rootState {
  board: boardState;
}
