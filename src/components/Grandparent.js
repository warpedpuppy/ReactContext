import React from 'react';
import NameContext from '../NameContext'
import Parent from './Parent';

export default class Grandparent extends React.Component {
  static contextType = NameContext;
  render(){
     return (
      <section>
      <h2>Grandparent</h2>
      <button onClick={ () => this.context.setName('Grandparent') } > Make context "Grandparent" </button>
      <Parent />
      </section>
    );
  }
 
}

