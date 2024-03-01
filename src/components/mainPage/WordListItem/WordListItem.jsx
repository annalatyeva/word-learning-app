import React from 'react';
import TableButton from '../TableButton/TableButton';

function WordListItem({
  word,
  index,
  editedWord,
  editedWords,
  setEditedWords,
  changeEdit,
  deleteWord,
  saveEditedWord,
  editButton,
  deleteButton,
  saveButton,
  cancelButton,
}) {
  return (
    <>
      {word.isEdit ? (
        <tr className="input-tr">
          <td>
            <input
              type="text"
              defaultValue={editedWord?.english || word.english}
              onChange={(e) => {
                const newEditedWords = [...editedWords];
                newEditedWords[index] = {
                  ...newEditedWords[index],
                  english: e.target.value,
                };
                setEditedWords(newEditedWords);
              }}
            />
          </td>
          <td>
            <input
              type="text"
              defaultValue={editedWord?.transcription || word.transcription}
              onChange={(e) => {
                const newEditedWords = [...editedWords];
                newEditedWords[index] = {
                  ...newEditedWords[index],
                  transcription: e.target.value,
                };
                setEditedWords(newEditedWords);
              }}
            />
          </td>
          <td>
            <input
              type="text"
              defaultValue={editedWord?.russian || word.russian}
              onChange={(e) => {
                const newEditedWords = [...editedWords];
                newEditedWords[index] = {
                  ...newEditedWords[index],
                  russian: e.target.value,
                };
                setEditedWords(newEditedWords);
              }}
            />
          </td>
          <td>
            <TableButton
              image={saveButton}
              onClick={() => {
                saveEditedWord(index);
              }}
            />
            <TableButton
              image={cancelButton}
              onClick={() => {
                changeEdit(index);
              }}
            />
          </td>
        </tr>
      ) : (
        <tr>
          <td>{word.english}</td>
          <td>[{word.transcription}]</td>
          <td>{word.russian}</td>
          <td>
            <TableButton
              image={editButton}
              onClick={() => {
                changeEdit(index);
              }}
            />
            <TableButton
              image={deleteButton}
              onClick={() => {
                deleteWord(index);
              }}
            />
          </td>
        </tr>
      )}
    </>
  );
}

export default WordListItem;


