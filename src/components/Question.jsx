import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import GameOption from './GameOption';

import './Question.css'

const Question = () => {

    const [quizstate, dispatch] = useContext(QuizContext);
    const currentQuestion = quizstate.questions[quizstate.currentQuestion]

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: {
                answer: currentQuestion.answer, option
            }
        })
    }

    return (
        <div id='question'>
            <div>Pergunta {quizstate.currentQuestion + 1} de {quizstate.questions.length} </div>
            <h2>{currentQuestion.question}</h2>
            <div id="opitions-container">
                {currentQuestion.options.map((option) => {
                    return (
                        <div className="option" onClick={() => dispatch({type: "ANSWER_QUESTION", payload: option})}>
                            <GameOption 
                            option={option} 
                            key={option} 
                            answer={currentQuestion.answer} 
                            selectedOption={() => onSelectOption(option)}
                            />
                        </div>
                    )
                })}
            </div>
            {quizstate.answerSelected && (
                <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
            )}
        </div>
    )
}

export default Question