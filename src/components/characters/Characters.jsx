import './Characters.css'
import { Link } from 'react-router-dom'
import CharactersList from './CharactersList'

const Characters = ({ char, game = false }) => {
  return (
    <div className='card-characters'>
      <div className='contain-image'>
        <img alt={char.name} src={char.image} />
      </div>
      <div className='button'>
        {!game ? (
          <Link to={`/biography/${char.id}`}>{char.name}</Link>
        ) : (
          <p>{char.name}</p>
        )}
      </div>

      <div className='character-info-container'>
        <ul className='character-info'>
          <CharactersList char={char} />
        </ul>
        {!game ? (
          <Link to={`/biography/${char.id}`}>
            <img src={char.image} />
          </Link>
        ) : (
          <img className='img-game' src={char.image} />
        )}
      </div>
    </div>
  )
}

export default Characters
