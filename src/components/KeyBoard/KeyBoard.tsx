import React from 'react';
import Key from '../Key/Key';
import './keyboard.css';
import { useDispatch, useSelector } from 'react-redux';
import type { rootState } from '../interface';
import { posMinus, setBoard, posCheck } from '../../Redux/boardSlice';

export const KeyBoard = () => {
  const rows: string[] = [
    'q w e r t y u i o p',
    'a s d f g h j k l',
    'z x c v b n m'
  ];
  const pos = useSelector((state: rootState) => state.board.pos);
  const board = useSelector((state: rootState) => state.board.board);
  const check = useSelector((state: rootState) => state.board.check);
  const dispatch = useDispatch();
  const handleClickBack = () => {
    if (pos <= 0) return;
    if (Math.floor((pos - 1) / 5) < check) return;
    const newBoard = [...board];
    newBoard[pos - 1] = '';
    dispatch(setBoard(newBoard));
    dispatch(posMinus());
  };
  const handleEnter = () => {
    if (Math.floor(pos / 5) > check) {
      dispatch(posCheck());
    }
  };
  return (
    <div className='keyboard-container'>
      {rows.map((row, idx) => {
        return (
          <div className='row' key={idx}>
            {idx === 2 && (
              <span className='letter-row' onClick={handleEnter}>
                Enter
              </span>
            )}
            {row.split(' ').map((letter, idx) => {
              return (
                <div className='letter-row' key={idx}>
                  <Key letter={letter.toUpperCase()} />
                  {letter === 'm' && (
                    <span onClick={handleClickBack}> Back </span>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
