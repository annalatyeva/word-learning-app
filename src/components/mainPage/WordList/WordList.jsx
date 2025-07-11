import React, { useState, useEffect } from "react";

import "./WordList.css";
import { Words } from "../../Words.js";
import WordListItem from "../WordListItem/WordListItem.jsx";
import AddNewWord from "../addNewWord/AddNewWord.jsx";

let editButton = require("../../../assets/edit-button.png");
let deleteButton = require("../../../assets/delete-button.png");
let saveButton = require("../../../assets/save-button.png");
let cancelButton = require("../../../assets/cancel-button.png");

function WordList() {
	const wordList = localStorage.getItem("wordList")
		? JSON.parse(localStorage.getItem("wordList"))
		: Words;
	const [words, setWords] = useState(wordList);
	const [editedWords, setEditedWords] = useState([]);

	useEffect(() => {
		localStorage.setItem("wordList", JSON.stringify(words));
	}, [words]);

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
	const deleteWord = index => {
		setWords(words.filter((word, i) => i !== index));
	};

	// Редактирование слова
	function editWord(index) {
		const nextWords = words.map((word, i) => {
			if (i === index) {
				return {
					...word,
					foreign: editedWords[index]?.foreign || word.foreign,
					transcription:
						editedWords[index]?.transcription || word.transcription,
					translated: editedWords[index]?.translated || word.translated,
					isEdit: false,
				};
			} else {
				return word;
			}
		});
		setWords(nextWords);
		setEditedWords([]);
	}

	const saveEditedWord = index => {
		editWord(index);
	};

	const updateWords = newWord => {
		setWords([...words, newWord]);
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
					/>
				))}
				<AddNewWord updateWords={updateWords} />
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
