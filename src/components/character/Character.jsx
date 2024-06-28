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
            <strong>Race: {char.race}</strong>
          </div>
          <div className='detail'>
            <strong>Gender: {char.gender}</strong>
          </div>
          <div className='detail'>
            <strong>Affiliation: {char.affiliation}</strong>
          </div>
          <div className='detail'>
            <strong>Ki: {char.ki}</strong>
          </div>
          <div className='detail'>
            <strong>Max Ki: {char.maxKi}</strong>
          </div>
        </div>
      </div>
      <div className='hero-description'>
        <strong>{char.description}</strong>
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
                <p>
                  <strong>Planet Name: {char.originPlanet.name}</strong>
                </p>
                <p>
                  <strong>Planet Description:</strong>{' '}
                  {char.originPlanet.description}
                </p>
                <p>
                  <strong>Is Destroyed:</strong>{' '}
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
              <strong>Ki:</strong> {el.ki}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Character
