import './App.css';
import { useState } from 'react';
import { UC, LC, NC, SC } from './Data/passData';

function App() {
  let p ='wscubetech';
  //  let n = p.charAt(Math.floor(Math.random() * p.length))
  //  console.log( n)

   let[uppercase, setUppercase] = useState(false);
   let[lowercase, setLowercase] = useState(false);
   let[number, setNumber] = useState(false);
   let[symbol, setSymbol] = useState(false);
   let[passwordlen, setPasswordlen] = useState(10)
   let[fpass, setFinalpass] = useState(" ")

   let createPassword = () =>{

    let finalPass =''
    let charSet =''

    if(uppercase || lowercase || number || symbol){
      if(uppercase) charSet+=UC;
      if(lowercase) charSet+=LC;
      if(number) charSet+=NC;
      if(symbol) charSet+=SC;

      for(let i =0; i < passwordlen; i++){
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length))

      }
      setFinalpass(finalPass)





    }
    else{
      alert("Please select atleast one check box")
    }

   }

   let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
   }


  return (
    <>
      <div className='password-box'>
      <h2>Random Password generator</h2>

      <div className='password-boxIn'>
        <input  type='text' value={fpass} readOnly /><button onClick={copyPass}>Copy</button>
      </div>

      <div className='password-length'>
      <label>Password Length</label>
      <input  type='number' max={20} min={8} value={passwordlen}  onChange={(event) => setPasswordlen(event.target.value)}   />
      </div>

      <div className='password-length'>
      <label>Including UpperCase Letter</label>
      <input  type='checkbox' checked={uppercase} onChange={() => setUppercase(!uppercase)} />
      </div>


      <div className='password-length'>
      <label>Including LowerCase Letter</label>
      <input  type='checkbox' checked={lowercase} onChange={() => setLowercase(!lowercase)} />
      </div>

      <div className='password-length'>
      <label>Including Numbers</label>
      <input  type='checkbox' checked={number} onChange={() => setNumber(!number)} />
      </div>

      <div className='password-length'>
      <label>Including Symbols</label>
      <input  type='checkbox' checked={symbol} onChange={() => setSymbol(!symbol)} />
      </div>
     <button className='btn' onClick={createPassword}> Generator Password</button>




      </div>
    </>
  );
}

export default App;
