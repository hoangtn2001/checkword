import { useEffect, useState } from 'react';
import './square.css';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import type { rootState } from '../interface';

interface Iprops {
  val: string;
  squareIdx: number;
}
export const Square = ({ val, squareIdx }: Iprops) => {
  const pos = useSelector((state: rootState) => state.board.pos);
  const word = useSelector((state: rootState) => state.board.word);
  const check = useSelector((state: rootState) => state.board.check);
  const curentPos = (pos - 1) % 5;

  const [correct, setCorrect] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);

  useEffect(() => {
    if (val && word[curentPos]) {
      if (val.toLowerCase() === word[curentPos].toLowerCase()) {
        setCorrect(true);
      } else if (
        !correct &&
        val !== '' &&
        word.toLowerCase().includes(val.toLowerCase())
      ) {
        setAlmost(true);
      } else if (
        !correct &&
        val !== '' &&
        !word.toLowerCase().includes(val.toLowerCase())
      ) {
        setWrong(true);
      }
    }

    return () => {
      setAlmost(false);
      setCorrect(false);
      setWrong(false);
    };
  }, [val]);

  const status =
    Math.floor(squareIdx / 5) < check
      ? correct
        ? 'correct'
        : almost
        ? 'almost'
        : wrong
        ? 'wrong'
        : ''
      : '';
  const variants = {
    filled: {
      scale: [1.2, 1],
      transition: {
        duration: 0.2
      }
    },
    unfilled: {
      scale: [1.1, 1],
      transition: {
        duration: 0.2
      }
    }
  };
  return (
    <>
      <motion.div
        className={`square ${status || ''}`}
        animate={val ? 'filled' : 'unfilled'}
        variants={variants}
      >
        {val}
      </motion.div>
    </>
  );
};
