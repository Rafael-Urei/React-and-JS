import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
//  const { reverse } = this.state;
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  }

  const handleIncrement = () => {
    if (counter === 0) {
      setCounter((prevCounter) => prevCounter + 1);
    } else {
      setCounter((prevCounter) => prevCounter - 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Contador: {counter}</h1>

        <button type='button' onClick={handleClick}>
          Reverse {reverseClass}
        </button>

        <button type='button' onClick={handleIncrement}>
          Increment
        </button>
      </header>
    </div>
  );
}

export default App;
