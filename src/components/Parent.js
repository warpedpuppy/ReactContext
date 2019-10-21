import React from 'react';
import NameContext from '../NameContext'
import Child from './Child';

export default class Parent extends React.Component {
  static contextType = NameContext;
  render(){
     return (
      <section>
          <h2>Parent</h2>
          <button onClick={ () => this.context.setName('Parent') } > Make context "Parent" </button>
          <Child />
      </section>
    );
  }
}
