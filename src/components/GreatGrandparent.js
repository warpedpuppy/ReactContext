import React from 'react';
import Grandparent from './Grandparent';
import NameContext from '../NameContext'

export default class GreatGrandparent extends React.Component {
  static contextType = NameContext;
  render() {
    return (
        <section>
            <h2>Great Grandparent</h2>
            <button onClick={ () => this.context.setName('Great Grandparent') } > Make context "Great Grandparent" </button>
            <Grandparent />
        </section>
      );
  }
}

