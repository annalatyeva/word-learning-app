function WordCard ({
    showTranslateButtonRef,
    isFinished,
    tags,
    english,
    transcription,
    translated,
    russian,
    showTranslate,
    translatedWords,
    currentIndex,
    handleRestart,
}) 


{
    return (
    <div className="word-card">
        {!isFinished
        ? 
            (<>
            <div className='word-type'><a href="#">{tags}</a></div>
            <div className='word-style'>{english}</div>
            <div className='transcription-style'>[{transcription}]</div>
            {translated || translatedWords.hasOwnProperty(currentIndex.toString()) 
            ? (<div className='translate-style'>{russian}</div>) 
            : (<button ref={showTranslateButtonRef} className='show-translate' onClick={showTranslate} >Показать перевод</button>)}
            </>)
        : 
            (<>
            <div className='word-style'>Слова закончились</div>
            <button className='show-translate restart' onClick={handleRestart}>Начать снова</button>
            </>)}
    </div>
    )
}

WordCard.defaultProps = {
    tags: 'тема',
    english: 'слово на английском',
    transcription: 'транскрипция',
    russian: 'первод'
};

export default WordCard;