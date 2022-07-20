import * as React from 'react';
import './App.css'
import NavBar from './NavBar';
import Layout from './Layout';
import UralsCrude from './UralsCrude';

function App() {
    return (
      <>
        <div className="AppBar">
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
