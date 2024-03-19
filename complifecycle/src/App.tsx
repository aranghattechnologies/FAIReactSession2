import React from 'react';
import logo from './logo.svg';
import './App.css';
import MessageBox from './MessageBox';
import MessageBox2 from './MessageBox2';
import UserList from './UserList';

function App() {

  let  [show,setShow] = React.useState(true);

  return (
    <div>
       {/* <button onClick={() => { setShow(!show)}}>Toggle</button> */}
      {/* <button onClick={() => { setShow(!show)}}>Toggle</button>
      {show &&
      <MessageBox message='Hello World !!!' /> } */}
      {/* {show && <MessageBox2 /> */}
      <UserList />
    </div>
  );
}

export default App;
