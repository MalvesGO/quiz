import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome';
import Question from './components/Question';
import GameOver from './components/GaveOver'

import './App.css'

function App() {
  const [quizstate, dispatch] = useContext(QuizContext);
  useEffect(() => {
    dispatch({
      type: "REORDER_QUESTIONS"
    })
  }, [])

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {/* <Welcome /> */}
      {quizstate.gameStage === "Start" && <Welcome />}
      {quizstate.gameStage === "Playing" && <Question />}
      {quizstate.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
