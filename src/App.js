import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");


  //Logic
  function calBmi(e) {
    e.preventDefault();

    if (height === 0 || weight === 0) {
      alert("Please enter your Height and Weight value")
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1));

      // 
      if (bmi < 25) {
        setMessage("Your underweight")
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are healthy weight")
      } else {
        setMessage("You are overweight")
      }
    }
  }

  function Reload() {
    window.location.reload()
  }

  return (
    <div className="App">
      <h2>BMI Calculator</h2>
      <div className='container'>
        <form onSubmit={calBmi}>
          {/* Weight */}
          <div>
            <label>Weight(ibs)</label>
            <input type='text' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          {/* height */}
          <div>
            <label>Height(in)</label>
            <input type='text' value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          {/* button */}
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={Reload} type='submit'>Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
