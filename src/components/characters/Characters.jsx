import './Characters.css'
import { Link } from 'react-router-dom'
import CharactersList from './CharactersList'

const Characters = ({ char }) => {
  return (
    <div className='card-characters'>
      <div className='contain-image'>
        <img alt={char.name} src={char.image} />
      </div>
      <div className='button'>
        <Link to={`/biography/${char.id}`}>{char.name}</Link>
      </div>
      <div className='character-info-container'>
        <ul className='character-info'>
          <CharactersList char={char} />
        </ul>
        <Link to={`/biography/${char.id}`}>
          <img src={char.image} />
        </Link>
      </div>
    </div>
  )
}

export default Characters
