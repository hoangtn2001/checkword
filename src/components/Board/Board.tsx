import { Square } from '../Square/Square';
import './board.css';
import { KeyBoard } from '../KeyBoard/KeyBoard';

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
