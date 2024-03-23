function WordCard ({
    showTranslateButtonRef,
    isFinished,
    foreign,
    transcription,
    translated,
    wasTranslated,
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
            <div className='word-style'>{foreign}</div>
            <div className='transcription-style'>[{transcription}]</div>
            {wasTranslated || translatedWords.hasOwnProperty(currentIndex.toString()) 
            ? (<div className='translate-style'>{translated}</div>) 
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
    foreign: 'слово на английском',
    transcription: 'транскрипция',
    translated: 'перевод'
};

export default WordCard;