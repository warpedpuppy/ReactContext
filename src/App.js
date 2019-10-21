import React from 'react';
import './App.css';
import GreatGrandparent from './components/GreatGrandparent.js';
import NameContext from './NameContext';

class App extends React.Component {
 state = {
  name: ''
 };
 handleSetName = (name) => {
   this.setState({ name })
 };

 render() {
        const contextValue = {
         name: this.state.name,
         setName: this.handleSetName,
        }
       return (
        <NameContext.Provider value={contextValue}>
           <div>context value: { this.state.name} </div>
           <GreatGrandparent />
        </NameContext.Provider>
      );
  }
}

export default App;
