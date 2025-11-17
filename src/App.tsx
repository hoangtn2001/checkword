import './App.css';
import { Heading } from './components/Heading';
import { Board } from './components/Board/Board';
import { useSelector } from 'react-redux';
import type { rootState } from './components/interface';
function App() {
  const board = useSelector((state: rootState) => state.board.board);
  return (
    <>
      <div className='App'>
        <Heading type='h1' text='Wordiee' />
        <Heading type='subtitle' text='Wordiee another' />
        <div className='board-container'>
          <Board board={board} />
        </div>
      </div>
    </>
  );
}

export default App;
