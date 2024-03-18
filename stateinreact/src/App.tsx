import React from 'react';
import { useState } from 'react';

type Message = {
  title : string;
  description : string;
  isRead : boolean;
}

function App() {
  //[variable, function to change variable]
  //State is a variable that can change over time
  //let [message,setMessage] = useState<string>("Hello World!");
  let [message,setMessage] = useState<Message>(
                                    {title: "Hello World!"
                                    , description: "This is a description"
                                    , isRead: false});

  function changeMessage() {
    //message = "Hello Universe!";
    setMessage({...message,title : "Hello Universe", isRead: true});
    console.log(message)
  }

  return (
   <div>
      <h1>{message.title}</h1>
      <strong>{message.description}</strong>
      <br/>
      <small>{message.isRead ? "Read" : "Unread"}</small>
      <hr />
      <button type='button' onClick={changeMessage}>Mark As Read</button>
   </div>
  );
}

export default App;
