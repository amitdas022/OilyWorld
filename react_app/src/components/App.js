import * as React from 'react';
import NavBar from './NavBar';
import Layout from './Layout';
import UralsCrude from './UralsCrude';


const inlineCSS = {
  backgroundColor: '#C3C7CE',
  
};

function App() {
    return (
      <>
        <div className="AppBar" style={inlineCSS}>
          <NavBar />
        </div>
        <div className='UralsCrudeOil'>
          <UralsCrude />
        </div>
        <div className='LayoutApp'>
          <Layout />
        </div>
      </>    
    );
  }

export default App;
