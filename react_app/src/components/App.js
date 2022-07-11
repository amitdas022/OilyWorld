import * as React from 'react';
import NavBar from './NavBar';
import Layout from './Layout';


const inlineCSS = {
  backgroundColor: '#C3C7CE',
  
};

function App() {
    return (
      <>
        <div className="AppBar" style={inlineCSS}>
          <NavBar />
        </div>
        <div className='LayoutApp'>
          <Layout />
        </div>
      </>    
    );
  }

export default App;
