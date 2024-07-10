import './InitGame.css'
import React, { useContext } from 'react'
import { CharsContext } from '../../context/CharsContext'
import Characters from '../../components/characters/Characters'
import { GameContext } from '../../context/GameContext'

const InitGame = () => {
  const {
    state: { user },
    dispatch
  } = useContext(GameContext)
  const {
    state: { chars },
    handleSelectRandomChar
  } = useContext(CharsContext)

  const handleSelect = (char) => {
    dispatch({ type: 'NEW_USER_CHAR', payload: char })
  }

  return (
    <div className='container-Chars-game'>
      <div>
        <h4>Selecciona tu personaje</h4>
      </div>
      <div>
        <div className='contain-cards'>
          {chars.map(
            (char) =>
              parseFloat(char.ki) > 0 && (
                <div
                  key={char.id}
                  className='container-card-game'
                  onClick={() => handleSelect(char)}
                >
                  <Characters char={char} game={true} />
                  <div className='selected-char-game'>
                    {user === char ? '🔴' : '⚪'}
                  </div>
                </div>
              )
          )}
        </div>
        {Object.keys(user).length > 0 && (
          <div className='init-btn-battle'>
            <div>
              <p>Has elegido a</p>
              <img src={user.image} />
              <p>{user.name}</p>
              <p>¿Iniciamos?</p>
              <div>
                <button onClick={handleSelectRandomChar}>A luchar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default InitGame
