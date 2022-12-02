import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const style = {width:'100vw', height:'100vh', overflow:'hidden'}

  return (
    <iframe src="https://www.harshag.com/lineby1" style={style} sandbox="allow-same-origin allow-scripts allow-forms" scrolling="no"/>
  );
}

export default App;
