import React from 'react';
import './App.css';
import MainWindow from './components/MainWindow/MainWindow';

import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <MainWindow />
      <Modal />
    </div>
  );
}

export default App;
