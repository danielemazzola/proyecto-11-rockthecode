import './InitGame.css'
import React, { useContext, useRef, useState } from 'react'
import { CharsContext } from '../../context/CharsContext'
import Characters from '../../components/characters/Characters'

const InitGame = () => {
  const [selected, setSelected] = useState({})
  const {
    state: { chars }
  } = useContext(CharsContext)

  const handleSelect = (char) => {
    setSelected(char)
    console.log(selected)
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
                    {selected === char ? '🔴' : '⚪'}
                  </div>
                </div>
              )
          )}
        </div>
        {Object.keys(selected).length > 0 && (
          <div className='init-btn-battle'>
            <div>
              <p>¿Iniciamos?</p>
              <div>
                <button>Si</button>
                <button>No</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default InitGame
