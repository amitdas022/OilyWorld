import React from 'react';
import NavBar from './NavBar';

const inlineCSS = {
  backgroundColor: '#C3C7CE',
  
};

function App() {
    return (
      <div className="App" style={inlineCSS}>
          <NavBar />
      </div>
    );
  }

export default App;
