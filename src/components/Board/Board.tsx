import React from 'react';
import { Square } from '../Square/Square';
import './board.css';
import { KeyBoard } from '../KeyBoard/KeyBoard';
import Key from '../Key/Key';
interface Iprops {
  board: string[];
}
export const Board = ({ board }: Iprops) => {
  return (
    <>
      <div className='board'>
        {board.map((square, index) => {
          return (
            <div key={index}>
              <Square key={index} val={square} squareIdx={index} />
            </div>
          );
        })}
      </div>
      <div className='keyboard'>
        <KeyBoard />
      </div>
    </>
  );
};
