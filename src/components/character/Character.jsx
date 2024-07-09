import React, { useContext } from 'react'
import './Character.css'
import { CharsContext } from '../../context/CharsContext'
import CharacterList from './CharacterList'
import CharacterPlanet from './CharacterPlanet'
import CharacterTransforms from './CharacterTransforms'

const Character = () => {
  const { state } = useContext(CharsContext)
  const char = state.char
  return (
    <div className='character-container'>
      <div className='hero-info'>
        <div className='hero-image'>
          <img src={char.image} alt={char.name} />
        </div>
        <ul className='hero-details'>
          <CharacterList char={char} />
        </ul>
      </div>
      <div className='hero-description'>
        <p>
          <span>Description:</span>
          <br></br> {char.description}
        </p>
      </div>
      <div className='character-images'>
        {char.originPlanet && <CharacterPlanet char={char} />}
      </div>
      <div className='character-transformations'>
        {char.transformations?.map((el, index) => (
          <CharacterTransforms key={index} char={el} />
        ))}
      </div>
    </div>
  )
}

export default Character
