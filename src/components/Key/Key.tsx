import './key.css';
import { useDispatch, useSelector } from 'react-redux';
import type { rootState } from '../interface';
import { setBoard, posPlus } from '../../Redux/boardSlice';

interface IProps {
  letter: string;
}

const Key = ({ letter }: IProps) => {
  const pos = useSelector((state: rootState) => state.board.pos);
  const board = useSelector((state: rootState) => state.board.board);
  const check = useSelector((state: rootState) => state.board.check);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (pos >= board.length) return;
    if (Math.floor(pos / 5) !== check) return;
    const newBoard = [...board];
    newBoard[pos] = letter;
    dispatch(setBoard(newBoard));
    dispatch(posPlus());
  };
  return (
    <div className='letter' onClick={handleClick}>
      {letter}
    </div>
  );
};

export default Key;
