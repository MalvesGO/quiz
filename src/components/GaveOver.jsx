import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import WellDone from '../img/welldone.svg';

import './GaveOver.css'

const GaveOver = () => {

    const [quizstate, dispatch] = useContext(QuizContext);

    return (
        <div id='gameover'>
            <h2>fim de jogo</h2>
            <p>Pontuação: {quizstate.score} </p>
            <p>Você acertou {quizstate.score} de {quizstate.questions.length} perguntas</p>
            <img src={WellDone} alt="fim de jogo" />
            <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
        </div>
    )
}

export default GaveOver