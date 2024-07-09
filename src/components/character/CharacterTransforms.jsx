import React from 'react'

const CharacterTransforms = ({ char }) => {
  return (
    <div className='transformation'>
      <h2>{char.name}</h2>
      <img src={char.image} alt={`${char.name} transformation ${char.name}`} />
      <div className='detail'>
        <p>Ki: {char.ki}</p>
      </div>
    </div>
  )
}

export default CharacterTransforms
