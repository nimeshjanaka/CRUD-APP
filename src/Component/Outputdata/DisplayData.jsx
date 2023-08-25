import React from 'react';
import './displaydata.css';
import useDataStore from '../../store/useDataStore';

function DisplayData() {
  const data = useDataStore((state) => state.data);
  const updateData = useDataStore((state) => state.updateData);
  const deleteData = useDataStore((state) => state.deleteData);

  const [editableIndex, setEditableIndex] = React.useState(-1);
  const [editedData, setEditedData] = React.useState('');

  const handleEdit = (index) => {
    setEditableIndex(index);
    setEditedData(data[index]);
  };

  const handleSave = (index) => {
    updateData(index, editedData);
    setEditableIndex(-1);
  };

  const handleDelete = (index) => {
    deleteData(index);
  };

  return (
    <ul className="data-list">
      {data.map((item, index) => (
        <li key={index} className="list-item">
          {editableIndex === index ? (
            <>
              <input
                type="text"
                value={editedData}
                onChange={(e) => setEditedData(e.target.value)}
                className="edit-input"
              />
              <button onClick={() => handleSave(index)} className="save-button">
                Save
              </button>
            </>
          ) : (
            <div className="list-content">
              <div>{item}</div>
              <div>
                <button onClick={() => handleEdit(index)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => handleDelete(index)} className="delete-button">
                  Delete
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default DisplayData;
