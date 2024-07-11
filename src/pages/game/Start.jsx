import React, { useContext, useEffect } from 'react'
import { GameContext } from '../../context/GameContext'
import './Start.css'

const Start = () => {
  const { state, dispatch } = useContext(GameContext)
  const { user, randomChar } = state

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

  return (
    <div className='start-container'>
      <div className='characters'>
        <CharacterCard character={user} position='left' />
        <div className='vs'>VS</div>
        <CharacterCard character={randomChar} position='right' />
      </div>
      <div className='questions'>
        <h3>Ronda de Preguntas</h3>
        <Question questionText='Pregunta 1: ...' />
        <Question questionText='Pregunta 2: ...' />
        <Question questionText='Pregunta 3: ...' />
      </div>
    </div>
  )
}

const CharacterCard = ({ character, position }) => (
  <div className={`character-card ${position}`}>
    <h2>{character.name}</h2>
    <img src={character.image} alt={character.name} />
    <div className='character-details'>
      <p>Ki: {character.ki}</p>
      <p>Max Ki: {character.maxKi}</p>
      <p>Race: {character.race}</p>
    </div>
  </div>
)

const Question = ({ questionText }) => <p>{questionText}</p>

export default Start
