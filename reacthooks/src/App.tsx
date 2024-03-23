import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDomainValidator } from './hooks/useDomainValidator';


function App() {
  let currentEmail = useDomainValidator();
  let confirmEmail = useDomainValidator();

  return (
    <div className="App">
      <div>
        <label>Email</label>
        <input type="text" onChange={(e)=> currentEmail.setEmail(e.target.value)} />
        {currentEmail.validationMessage}
</div>
<div>
        <label>Confirm Email Validator</label>
        <input type="text" onChange={(e)=> confirmEmail.setEmail(e.target.value)} />
        {confirmEmail.validationMessage}</div>
    </div>
  );
}

export default App;
