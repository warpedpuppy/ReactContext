import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
  function buttonHandler(){
    console.log("click")
  }
  return (
    <nav>
    <FontAwesomeIcon icon={faSearch}/>
      <button onClick={() => buttonHandler()}>button1</button>
      <button onClick={() => buttonHandler()}>button2</button>
      <button onClick={() => buttonHandler()}>button3</button>
    </nav>
  );
}

