import React from 'react';
import './SubMenu.css';
import ColorContext from '../ColorContext'

export default class SubMenu extends React.Component {
  static contextType = ColorContext;
  render(){
     return (
      <>
      <button onClick={ () => this.context.setColor('brown') } >here: { this.context.color }</button>
      <hr />
      </>
    );
  }
 
}

