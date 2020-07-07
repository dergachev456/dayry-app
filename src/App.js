import React from 'react';
import './App.css';
import AsideSection from './components/AsideSection/AsideSection';
import MainSection from './components/MainSection/MainSection';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <AsideSection />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
