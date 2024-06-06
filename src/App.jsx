import { useState } from "react";
import './App.css';
// *************************************************************************

function Myapp() {
  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
// ************************************************************************
  async function fetchAdvice() {
    try {
      setIsLoading(true); 
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error('Error fetching the advice:', error);
    } finally {
      setIsLoading(false); 
    }
  }
  // ************************************************************************

  function handleClick() {
    fetchAdvice(); 
  }

  return (
    <div className="mybutton">
      <button onClick={handleClick} className="header" id="button">
        Click Here To Get Today's Advice
      </button> <br /> <br />
      {isLoading ? (
        <p className="loading">Loading please wait...</p> 
      ) : (
        <h1 className="result">{advice}</h1>  
      )}
    </div>
  );
}
// ****************************************************************************
function App() {
  return (
    <>
      
      <div className="header">
        <p>By Joseph Mbugua</p>
        <h1>ADVICE APP</h1>
      </div>
      <Myapp />
    </>
  );
}

export default App;
