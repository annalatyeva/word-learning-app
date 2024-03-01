import React, { useState } from 'react';

import './WordList.css';
import { Words } from '../../Words.js';
import WordListItem from '../WordListItem/WordListItem.jsx';

let editButton = require("../../../assets/edit-button.png");
let deleteButton = require("../../../assets/delete-button.png")
let saveButton = require("../../../assets/save-button.png");
let cancelButton = require("../../../assets/cancel-button.png");

function WordList() {
  const [words, setWords] = useState(Words);
  const [editedWords, setEditedWords] = useState([]);


  // Включение/отключение режима редактирования слова
  function changeEdit(index) {
    const nextWords = words.map((word, i) => {
      if (i === index) {
        return {
          ...word,
          isEdit: !word.isEdit,
        };
      } else {
        return {
          ...word,
          isEdit: false,
        };
      }
    });
    setWords(nextWords);
    setEditedWords([]);
  }

  // Удаление слова
  const deleteWord = (index) => {
    setWords(words.filter((word, i) => i !== index));
  };

  // Редактирование слова
  function editWord(index) {
    const nextWords = words.map((word, i) => {
      if (i === index) {
        return {
          ...word,
          english: editedWords[index]?.english || word.english,
          transcription: editedWords[index]?.transcription || word.transcription,
          russian: editedWords[index]?.russian || word.russian,
          isEdit: false,
        };
      } else {
        return word;
      }
    });
    setWords(nextWords);
    setEditedWords([]);
  }

  const saveEditedWord = (index) => {
    editWord(index);
  };


  return (
    <table>
      <thead>
        <tr>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
      {words.map((word, i) => (
          <WordListItem
            key={i}
            word={word}
            index={i}
            editedWord={editedWords[i]}
            editedWords={editedWords}
            setEditedWords={setEditedWords}
            changeEdit={changeEdit}
            deleteWord={deleteWord}
            saveEditedWord={saveEditedWord}
            editButton={editButton}
            deleteButton={deleteButton}
            saveButton={saveButton}
            cancelButton={cancelButton}
          />))}
      </tbody>

      <tfoot>
        <tr>
          <th colSpan="4">Количество слов: {words.length}</th>
        </tr>
      </tfoot>
    </table>
  );
}

export default WordList;