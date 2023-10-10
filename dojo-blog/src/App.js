import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const random_number = Math.floor(Math.random() * 100);
function App() {
  const [Hint, setHint] = useState("Take a first guess");
  const [Guess, setGuess] = useState();
  const [Guesses, setGuesses] = useState(0);
  return (
    <div className="App">
      <body>
        <div className="App-header">
          <div className="App-top">
            <img src={logo} className="App-logo" alt="logo"/>
          </div>
        </div>
        <div className='box'>
          <a>[ Guesses: {Guesses} ]</a><br />
          <b>{Hint}</b><hr />
          <input type="number" min='0' max="100" placeholder='0' value={Guess} onInput={e => setGuess(e.target.value)}/> <button onClick={Check} >Check</button>
        </div>
      </body>
    </div>
  );
  function Check() {
    if (Guess == random_number)
      setHint("You're right!");
    else if (Guess > random_number)
      setHint("Too much");
    else if (Guess < random_number)
      setHint("Not enough");
    setGuesses(Guesses + 1);
  }
}
export default App;
