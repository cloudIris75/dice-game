import { useState } from 'react';
import logoImg from './assets/logo.png';
import Button from './Button';
import Board from './Board';
import './css/App.css';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);
  const [myClass, setMyClass] = useState('');
  const [otherClass, setOtherClass] = useState('');

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
    setMyClass(nextMyNum > nextOtherNum ? 'Board-winner' : '');
    setOtherClass(nextOtherNum > nextMyNum ? 'Board-winner' : '');
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
    setMyClass('');
    setOtherClass('');
  };

  return (
    <div className="App">
      <div>
        <img className="App-logo" src={logoImg} alt="주사위 게임 로고" />
        <h1 className="App-title">주사위 게임</h1>
      </div>
      <div>
        <Button className="App-button" color="blue" onClick={handleRollClick}>
          던지기
        </Button>
        <Button className="App-button" color="red" onClick={handleClearClick}>
          처음부터
        </Button>
      </div>
      <div className="App-boards">
        <Board
          className={myClass}
          name="나"
          color="blue"
          gameHistory={myHistory}
        />
        <Board
          className={otherClass}
          name="상대"
          color="red"
          gameHistory={otherHistory}
        />
      </div>
    </div>
  );
}

export default App;
