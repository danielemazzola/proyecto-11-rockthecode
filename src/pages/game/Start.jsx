import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GameContext } from '../../context/GameContext'
import './Start.css'

const questionArray = [
  {
    id: 1,
    question: '¿Cómo se llama el planeta de los saiyajines?',
    options: ['Namek', 'Vegeta', 'Earth'],
    answer: 'Vegeta'
  },
  {
    id: 2,
    question: '¿Quién es el creador de las Dragon Balls?',
    options: ['Kami', 'Bulma', 'Roshi'],
    answer: 'Kami'
  },
  {
    id: 3,
    question: '¿Cómo se llama el hijo mayor de Goku?',
    options: ['Trunks', 'Goten', 'Gohan'],
    answer: 'Gohan'
  },
  {
    id: 4,
    question: '¿Cuál es la técnica especial de Vegeta?',
    options: ['Kamehameha', 'Final Flash', 'Destructo Disk'],
    answer: 'Final Flash'
  },
  {
    id: 5,
    question: '¿Quién fue el primer maestro de artes marciales de Goku?',
    options: ['Maestro Roshi', 'Kami', 'Piccolo'],
    answer: 'Maestro Roshi'
  },
  {
    id: 6,
    question:
      '¿Cómo se llama la transformación que Goku alcanza durante la batalla con Freezer en Namek?',
    options: ['Super Saiyajin', 'Kaio-ken', 'Ultra Instinct'],
    answer: 'Super Saiyajin'
  },
  {
    id: 7,
    question: '¿Quién es el dios de la destrucción del Universo 7?',
    options: ['Whis', 'Zeno', 'Beerus'],
    answer: 'Beerus'
  },
  {
    id: 8,
    question: '¿Cuál es el nombre del padre de Goku?',
    options: ['King Vegeta', 'Bardock', 'Raditz'],
    answer: 'Bardock'
  },
  {
    id: 9,
    question: '¿Cómo se llama la esposa de Goku?',
    options: ['Chi-Chi', 'Bulma', 'Launch'],
    answer: 'Chi-Chi'
  },
  {
    id: 10,
    question: '¿Quién es el principal villano en la saga de Cell?',
    options: ['Buu', 'Freezer', 'Cell'],
    answer: 'Cell'
  }
]

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

  const handleAnswerClick = (selectedAnswer) => {
    const currentQuestion = questionArray[currentQuestionIndex]
    if (selectedAnswer === currentQuestion.answer) {
      dispatch({ type: 'SCORE_USER', payload: score_user + 1 })
    } else {
      dispatch({ type: 'SCORE_MACHINA', payload: score_machina + 1 })
    }

    if (currentQuestionIndex + 1 < questionArray.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setShowResult(true)
    }
  }

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
          <p>Has ganado🤩</p>
        ) : (
          <p>Has perdido😢</p>
        )}
        <button onClick={handleRestartGame}>Intentarlo de nuevo</button>
        <Link to='../../../'>Volver al home</Link>
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
              <button key={option} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
      <button onClick={handleRestartGame}>Intentarlo de nuevo</button>
    </div>
  )
}

export default Start
