import React from 'react'

const CharacterPlanet = ({ char }) => {
  return (
    <div className='origin-planet'>
      <div className='planet-image-container'>
        <img
          className='planet-image'
          src={char.originPlanet.image}
          alt={`${char.name}'s origin planet`}
        />
        <div className='planet-info'>
          <h3>{char.originPlanet.name}</h3>
          <p>{char.originPlanet.description}</p>
          <p>
            <span>Destroyed:</span>{' '}
            {char.originPlanet.isDestroyed ? 'Yes' : 'No'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CharacterPlanet
