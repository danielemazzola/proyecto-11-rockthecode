import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GameContext } from '../../context/GameContext'
import './Start.css'
import { handleAnswerClick, questionArray } from './helpers'

const Start = () => {
  const { state, dispatch } = useContext(GameContext)
  const { user, randomChar, score_user, score_machina } = state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem('user'))
    const randomCharLocalStorage = JSON.parse(
      localStorage.getItem('randomChar')
    )
    if (userLocalStorage && randomCharLocalStorage) {
      dispatch({ type: 'NEW_USER_CHAR', payload: userLocalStorage })
      dispatch({ type: 'NEW_MACHINE_CHAR', payload: randomCharLocalStorage })
    }
  }, [dispatch])

  const handleRestartGame = () => {
    dispatch({ type: 'SCORE_USER', payload: 0 })
    dispatch({ type: 'SCORE_MACHINA', payload: 0 })
    setCurrentQuestionIndex(0)
    setShowResult(false)
  }

  if (showResult) {
    return (
      <div className='start-container'>
        <h2>Resultado Final</h2>
        <p>
          Puntaje de {user.name}: {score_user}
        </p>
        <p>
          Puntaje de {randomChar.name}: {score_machina}
        </p>
        {score_user > score_machina ? (
          <>
            <p>Has ganado🤩</p>
            <button onClick={handleRestartGame}>Luchemos de nuevo</button>
          </>
        ) : (
          <>
            <p>Has perdido😢</p>
            <button onClick={handleRestartGame}>Intentarlo de nuevo</button>
          </>
        )}
      </div>
    )
  }

  const currentQuestion = questionArray[currentQuestionIndex]

  return (
    <div className='start-container'>
      <div className='characters'>
        <div className='character-card left'>
          <h2>{user.name}</h2>
          <img src={user.image} alt={user.name} />
          <div className='character-details'>
            <p>Ki: {user.ki}</p>
            <p>Max Ki: {user.maxKi}</p>
            <p>Race: {user.race}</p>
          </div>
        </div>
        <div className='vs'>VS</div>
        <div className='character-card right'>
          <h2>{randomChar.name}</h2>
          <img src={randomChar.image} alt={randomChar.name} />
          <div className='character-details'>
            <p>Ki: {randomChar.ki}</p>
            <p>Max Ki: {randomChar.maxKi}</p>
            <p>Race: {randomChar.race}</p>
          </div>
        </div>
      </div>
      <div className='questions'>
        <h3>Ronda de Preguntas</h3>
        <div className='contain-question-game'>
          <p>{currentQuestion.question}</p>
          <div>
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() =>
                  handleAnswerClick(
                    option,
                    currentQuestionIndex,
                    setCurrentQuestionIndex,
                    dispatch,
                    score_user,
                    score_machina,
                    setShowResult
                  )
                }
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
      <button onClick={handleRestartGame}>Intentarlo de nuevo</button>
      <Link to='../../../'>Volver al home</Link>
    </div>
  )
}

export default Start
