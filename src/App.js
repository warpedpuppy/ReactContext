import React from 'react';
import './App.css';
import Menu from './components/Menu.js';
import ColorContext from './ColorContext';

class App extends React.Component {
 state = {
  color: 'orange'
 };
 handleSetColor = (color) => {
   this.setState({ color })
 };

 render() {
        const contextValue = {
         color: this.state.color,
         setColor: this.handleSetColor,
        }
       return (
        <ColorContext.Provider value={contextValue}>
        <div className="App">
          <header className="App-header">
           <Menu />
          </header>
        </div>
        </ColorContext.Provider>
      );
  }
}

export default App;
