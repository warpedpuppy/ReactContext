import React from 'react';
import './Menu.css';

export default function Menu() {
  function buttonHandler(){
    console.log("click")
  }
  return (
    <nav>
      <button onClick={() => buttonHandler()}>button1</button>
      <button onClick={() => buttonHandler()}>button2</button>
      <button onClick={() => buttonHandler()}>button3</button>
    </nav>
  );
}

