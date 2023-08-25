import React from 'react';
import './App.css';
import DisplayData from './Component/Outputdata/DisplayData';
import InputData from './Component/InputData/InputData';
import useDataStore from './store/useDataStore';

function App() {
  const data = useDataStore((state) => state.data);

  return (
    <div className="h">
      <div className="App">
        <h1 className="h1">CRUD App</h1>
        <br />
        <InputData />
        <DisplayData />
      </div>
    </div>
  );
}

export default App;

