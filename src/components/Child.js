import React from 'react';
import NameContext from '../NameContext'

export default class Parent extends React.Component {
  static contextType = NameContext;
  render(){
     return (
      <section>
          <h2>Child</h2>
          <button onClick={ () => this.context.setName('Child') } >Make context "Child"</button>
      </section>
    );
  }
}
