import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  board: [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ],
  pos: 0,
  check: 0,
  word: 'huyen'
};
const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload;
    },
    posPlus: (state) => {
      state.pos++;
    },
    posMinus: (state) => {
      state.pos--;
    },
    posCheck: (state) => {
      state.check++;
    }
  }
});
export const { setBoard, posPlus, posMinus, posCheck } = boardSlice.actions;
export default boardSlice.reducer;
