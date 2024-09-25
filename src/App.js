import { useState } from 'react';
import './App.css';
import { UC, LC, NC, SC } from './PassChar';

function App() {

  const [uppercase, setUpperCase] = useState(false);
  const [lowercase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passlen, setPasswordLength] = useState(0);
  const [generatedPassword, setGeneratedPassword] = useState('');

  let createPassword = () => {
    let finalPas = '';
    let charSet = '';
    if (uppercase || lowercase || numbers || symbols) {
      if (uppercase) {
        charSet += UC;
      }
      if (lowercase) {
        charSet += LC;
      }
      if (numbers) {
        charSet += NC;
      }
      if (symbols) {
        charSet += SC;
      }

      for (let i = 0; i < passlen; i++) {
        finalPas += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }

      setGeneratedPassword(finalPas);


    } else {
      alert("Please Select onecheckbox");
    }
  }
  const copyToClipboard = () => {
    if (generatedPassword) {
      navigator.clipboard.writeText(generatedPassword);
      alert('Password copied to clipboard!');
    } else {
      alert('Please generate a password first.');
    }
  };

  return (
    <>
      <div className="outer-div">
        <h2>Password Generator</h2>
        <div className="inner-div1">
          <input type="text" value={generatedPassword} className="input1" readOnly></input>
          <button conClick={copyToClipboard}>Copy</button>
        </div>

        <div className="inner-div2">
          <label>Password length</label>
          <input type="number" placeholder="20" className="input2" onChange={(e) => setPasswordLength(e.target.value)}></input>
        </div>
        <div className="inner-div2">
          <label>Include uppercase letters</label>
          <input type="checkbox" checked={uppercase} onChange={() => setUpperCase(!uppercase)} className="check"></input>
        </div>

        <div className="inner-div2">
          <label>Include lowercase letters</label>
          <input type="checkbox" checked={lowercase} onChange={() => setLowerCase(!lowercase)} className="check"></input>
        </div>
        <div className="inner-div2">
          <label>Include numbers</label>
          <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} className="check"></input>
        </div>
        <div className="inner-div2">
          <label>Include symbols</label>
          <input type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} className="check"></input>
        </div>
        <button className="btn" onClick={createPassword}>Generate Password</button>
      </div>


    </>
  );
}

export default App;
