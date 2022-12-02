import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './GameOption.css'

const GameOption = ({ option, selectedOption, answer }) => {

    const [quizstate, dispatch] = useContext(QuizContext);

    return (
        <div className={`gameoption 
        ${quizstate.answerSelected && option === answer ? 'correct' : ""
            } ${quizstate.answerSelected && option !== answer ? 'wrong' : ""
            }`}
            onClick={() => selectedOption()}            >
            <p> {option} </p>
        </div>
    )
}

export default GameOption