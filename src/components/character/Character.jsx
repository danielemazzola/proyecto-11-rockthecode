import React from 'react'
import './Character.css'

const Character = ({ char }) => {
  console.log(char)
  return (
    <div className='character-container'>
      <div className='hero-info'>
        <div className='hero-image'>
          <img src={char.image} alt={char.name} />
        </div>
        <div className='hero-details'>
          <h1>{char.name}</h1>
          <div className='detail'>
            <p>Race: {char.race}</p>
          </div>
          <div className='detail'>
            <p>Gender: {char.gender}</p>
          </div>
          <div className='detail'>
            <p>Affiliation: {char.affiliation}</p>
          </div>
          <div className='detail'>
            <p>Ki: {char.ki}</p>
          </div>
          <div className='detail'>
            <p>Max Ki: {char.maxKi}</p>
          </div>
        </div>
      </div>
      <div className='hero-description'>
        <p>
          <span>Description:</span>
          <br></br> {char.description}
        </p>
      </div>
      <div className='character-images'>
        {char.originPlanet && (
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
        )}
      </div>
      <div className='character-transformations'>
        {char.transformations?.map((el, index) => (
          <div key={index} className='transformation'>
            <h2>{el.name}</h2>
            <img
              src={el.image}
              alt={`${char.name} transformation ${el.name}`}
            />
            <div className='detail'>
              <p>Ki: {el.ki}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Character
