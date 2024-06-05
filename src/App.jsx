import { useState } from "react";
import './App.css';

function Myapp() {
  const [advice, setAdvice] = useState('');

  async function fetchAdvice() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error('Error fetching the advice:', error);
    }
  }

  function handleClick() {
    fetchAdvice();
  }

  return (
    <div>
      <button onClick={handleClick} className="header" id="button">
        Click to get advice of the day
      </button>
      <h1 className="result">{advice}</h1>
    </div>
  );
}

function App() {
  return (
    <>
      <Myapp />
      <div className="header">
        <p>By Joseph Mbugua</p>
        <h1>ADVICE APP</h1>
      </div>
    </>
  );
}

export default App;
