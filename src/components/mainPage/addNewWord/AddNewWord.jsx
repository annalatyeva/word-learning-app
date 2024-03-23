
import React, { useState, useEffect } from 'react';
import './AddNewWord.css';

let saveButton = require("../../../assets/save-button.png");
let cancelButton = require("../../../assets/cancel-button.png");
let saveButtonDisabled = require("../../../assets/save-button-disabled.png")

function AddNewWord({ updateWords }) {
  const [editNew, setEditNew] = useState(false);
  const [newWord, setNewWord] = useState({ foreign: '', transcription: '', translated: '' });
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (newWord.foreign.length !== 0 && newWord.transcription.length !== 0 && newWord.translated.length !== 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [newWord]);
  
  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewWord(prevState => ({ ...prevState, [name]: value }));
  }

  const handleshowInput = () => {
    if (!editNew) {
      setEditNew(true);
    } else {
      updateWords(newWord); 
      setNewWord({ foreign: '', transcription: '', translated: '' });
      setEditNew(false);
    }
  };


  const handleCancel = () => {
    setEditNew(false);
  };

  return (
    <tr className={editNew ? "input-tr" : "add-new-word-tr"}>
      {!editNew ? (
        <td colSpan="4">
          <button className='add-new-word' onClick={handleshowInput}>Добавить новое слово</button>
        </td>
      ) : (
        <>
          <td>
            <input type="text" name="foreign" onChange={handleInputChange} />
          </td>
          <td>
            <input type="text" name="transcription" onChange={handleInputChange} />
          </td>
          <td>
            <input type="text" name="translated" onChange={handleInputChange} />
          </td>
          <td>
            <button disabled={isDisabled} className='TableButton' onClick={handleshowInput}><img src={isDisabled ? saveButtonDisabled : saveButton} alt="save button" /></button>
            <button className='TableButton' onClick={handleCancel}><img src={cancelButton} alt="cancel button" /></button>
          </td>
        </>
      )}
    </tr>
  );
}

export default AddNewWord;
