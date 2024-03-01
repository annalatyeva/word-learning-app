
import React, { useState } from 'react';
import './AddNewWord.css';

function AddNewWord({ updateWords }) {
  const [editNew, setEditNew] = useState(false);
  const [newWord, setNewWord] = useState({ english: '', transcription: '', russian: '' });
  const [inputValue, setInputValue] = useState('');
  const [translatedValue, setTranslatedValue] = useState('');

  const handleAddInput = () => {
    if (!editNew) {
      setEditNew(true);
    } else {
      updateWords(newWord); 
      setNewWord({ english: '', transcription: '', russian: '' });
      setEditNew(false);
    }
  };

  const handleInputChange = async (e) => {
    setInputValue(e.target.value);

    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '165a628438mshba6f7a5e5627ca3p15cb6ejsn2a041c6b0d20',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      body: new URLSearchParams({
        q: e.target.value,
        target: 'ru',
        source: 'en'
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setTranslatedValue(result.data.translations[0].translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  const handleCancel = () => {
    setEditNew(false);
  };

  return (
    <tr className={editNew ? "input-tr" : "add-new-word-tr"}>
      {!editNew ? (
        <td colSpan="4">
          <button className='add-new-word' onClick={handleAddInput}>Добавить новое слово</button>
        </td>
      ) : (
        <>
          <td>
            <input type="text" name="english" value={inputValue} onChange={handleInputChange} />
          </td>
          <td>
            <input name="transcription" value={translatedValue} onChange={handleInputChange} />
          </td>
          <td>
            <input name="russian" value={translatedValue} onChange={handleInputChange} />
          </td>
          <td>
            <button onClick={handleAddInput}>OK</button>
            <button onClick={handleCancel}>No</button>
          </td>
        </>
      )}
    </tr>
  );
}

export default AddNewWord;
