import React, { useState } from 'react';
import './inputdata.css';
import useDataStore from '../../store/useDataStore';

function InputData() {
  const [inputData, setInputData] = useState('');
  const addData = useDataStore((state) => state.addData);

  const handleAdd = () => {
    if (inputData.trim() !== '') {
      addData(inputData);
      setInputData('');
    }
  };

  return (
    <div className="form-container">
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        className="input-field"
      />
      <button onClick={handleAdd} className="add-button">
        Add
      </button>
    </div>
  );
}

export default InputData;

