import { useEffect, useRef, useState } from 'react';
import './app.scss';

function App() {
  const colorValueRef = useRef();
  const [randomColor, setRandomColor] = useState();
  const [guessedColor, setGuessedColor] = useState();
  const [result, setResult] = useState(0);
  const [error, setError] = useState(null);

  const newRandom = () => {
    const red = Math.floor(Math.random() * 255)
      .toString(16)
      .padStart(2, '0');
    const green = Math.floor(Math.random() * 255)
      .toString(16)
      .padStart(2, '0');
    const blue = Math.floor(Math.random() * 255)
      .toString(16)
      .padStart(2, '0');
    setRandomColor(`${red}${green}${blue}`);
    console.log(red);
  };

  useEffect(() => {
    newRandom();
  }, []);
  const handleRestart = () => {
    setResult(0);
    newRandom();
    setGuessedColor('aaaaaa');
    colorValueRef.current.value = '';
  };
  const handleCheck = () => {
    let guessedValue = colorValueRef.current.value;
    if (guessedValue.length > 6 || guessedValue.length < 6) {
      setError('Color value must be 6 characters');
    } else {
      setGuessedColor(guessedValue);
      const rdiff =
        parseInt(randomColor.slice(0, 2), 16) -
        parseInt(guessedValue.slice(0, 2), 16);
      const gdiff =
        parseInt(randomColor.slice(2, 4), 16) -
        parseInt(guessedValue.slice(2, 4), 16);
      const bdiff =
        parseInt(randomColor.slice(4, 6), 16) -
        parseInt(guessedValue.slice(4, 6), 16);

      setResult(755 - (Math.abs(rdiff) + Math.abs(gdiff) + Math.abs(bdiff)));
    }
  };

  return (
    <div className='App'>
      <div className='guesser-container'>
        <h1>Color Guesser</h1>
        <div className='color-container'>
          <div
            className='random-color color-square'
            style={{ backgroundColor: `#${randomColor}` }}
          >
            {result ? <p>{`#${randomColor}`}</p> : <p>#??????</p>}
            <button onClick={newRandom}>Change color</button>
          </div>

          <div
            className='guessed-color color-square'
            style={{ backgroundColor: `#${guessedColor}` }}
          >
            {result ? <p>{`#${guessedColor}`}</p> : <p>#??????</p>}
          </div>
        </div>

        <div className='result-container'>
          <label htmlFor='result'>score: </label>
          <progress id='result' value={result} max='765'></progress>
          <div className='restart-button-box'>
            {result ? <button onClick={handleRestart}>Try again</button> : ''}
          </div>
        </div>
        <div className='input-container'>
          {error ? <p>{error}</p> : ''}
          <input type='text' ref={colorValueRef} placeholder='ex. de49a5' />
          <button onClick={handleCheck}>Check</button>
        </div>
      </div>
    </div>
  );
}

export default App;
