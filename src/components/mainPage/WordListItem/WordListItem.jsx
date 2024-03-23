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
              defaultValue={editedWord?.foreign || word.foreign}
              onChange={(e) => {
                const newEditedWords = [...editedWords];
                newEditedWords[index] = {
                  ...newEditedWords[index],
                  foreign: e.target.value,
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
              defaultValue={editedWord?.translated || word.translated}
              onChange={(e) => {
                const newEditedWords = [...editedWords];
                newEditedWords[index] = {
                  ...newEditedWords[index],
                  translated: e.target.value,
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
          <td>{word.foreign}</td>
          <td>[{word.transcription}]</td>
          <td>{word.translated}</td>
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


