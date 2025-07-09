import "./WordCardConteiner.css";

import { useEffect, useState } from "react";
import { useRef } from "react";
import { Words } from "../../Words.js";

import ArrowButton from "../ArrowButton/ArrowButton.jsx";
import WordCard from "../WordCard/WordCard.jsx";

let previousButton = require("../../../assets/previous-button.png");
let nextButton = require("../../../assets/next-button.png");
let disabledPreviousButton = require("../../../assets/disabled-previous-button.png");

function WordCardConteiner() {
	const wordList = localStorage.getItem("wordList")
		? JSON.parse(localStorage.getItem("wordList"))
		: Words;

	const [wasTranslated, setWasTranslate] = useState(false);
	const [translatedCount, setTranslatedCount] = useState(0);
	const [translatedWords, setTranslatedWords] = useState(() => ({}));

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isFinished, setIsFinished] = useState(false);

	const showTranslateButtonRef = useRef();

	const handleNext = () => {
		if (currentIndex < wordList.length - 1) {
			setCurrentIndex(currentIndex + 1);
			setWasTranslate(false);
		} else {
			setIsFinished(true);
		}
	};

	const handleRestart = () => {
		setCurrentIndex(0);
		setIsFinished(false);
		setWasTranslate(false);
		setTranslatedCount(0);
		setTranslatedWords({});
	};

	const handlePrevious = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
			setWasTranslate(false);
		}
	};

	const showTranslate = () => {
		setWasTranslate(!wasTranslated);
		setTranslatedCount(translatedCount + 1);
		setTranslatedWords(prevState => ({
			...prevState,
			[currentIndex]: true,
		}));
	};

	useEffect(() => {
		if (!wasTranslated && showTranslateButtonRef.current) {
			showTranslateButtonRef.current.focus();
		}
	}, [wasTranslated, showTranslateButtonRef]);

	return (
		<div className="WordCardConteiner">
			{isFinished ? (
				<></>
			) : (
				<ArrowButton
					image={currentIndex === 0 ? disabledPreviousButton : previousButton}
					disabled={currentIndex === 0}
					onClick={handlePrevious}
				/>
			)}
			<WordCard
				showTranslateButtonRef={showTranslateButtonRef}
				isFinished={isFinished}
				tags={wordList[currentIndex].tags}
				foreign={wordList[currentIndex].foreign}
				transcription={wordList[currentIndex].transcription}
				wasTranslated={wasTranslated}
				translated={wordList[currentIndex].translated}
				showTranslate={showTranslate}
				translatedWords={translatedWords}
				currentIndex={currentIndex.toString()}
				handleRestart={handleRestart}
			/>

			{isFinished ? (
				<></>
			) : (
				<ArrowButton
					image={nextButton}
					onClick={handleNext}
				/>
			)}
			<div className="translated-count">Слов изучено: {translatedCount}</div>
		</div>
	);
}

export default WordCardConteiner;
