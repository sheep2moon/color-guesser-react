import { useEffect, useRef, useState } from 'react';
import './app.scss';

function App() {
  let random = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const colorValueRef = useRef();
  const [randomColor, setRandomColor] = useState();
  const [guessedColor, setGuessedColor] = useState();

  const newRandom = () => {
    random.red = Math.floor(Math.random() * 255);
    random.green = Math.floor(Math.random() * 255);
    random.blue = Math.floor(Math.random() * 255);
    setRandomColor(`rgb(${random.red},${random.green},${random.blue})`);
  };

  useEffect(() => {
    newRandom();
  }, []);

  const handleCheck = () => {
    let guessedValue = colorValueRef.current.value;
    setGuessedColor();
    console.log();
  };
  console.log(randomColor);

  return (
    <div className='App'>
      <h1>Color Guesser</h1>
      <div className='guesser-container'>
        <div className='color-container'>
          <div
            className='random-color color-square'
            style={{ backgroundColor: randomColor }}
          />
          <div className='guessed-color color-square' />
        </div>
        <button onClick={newRandom}>Change color</button>
        <div className='color-values'>
          <p>red</p>
          <p>green</p>
          <p>blue</p>
        </div>
        <input type='text' ref={colorValueRef} />
        <button onClick={handleCheck}>Check</button>
      </div>
    </div>
  );
}

export default App;
