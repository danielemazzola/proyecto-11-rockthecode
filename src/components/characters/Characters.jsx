import React from 'react'
import './Characters.css'
import { Link } from 'react-router-dom'

const Characters = ({ char }) => {
  console.log(char)
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
          <li>
            <strong>Gender:</strong> {char.gender}
          </li>
          <li>
            <strong>Race:</strong> {char.race}
          </li>
          <li>
            <strong>Ki:</strong> {char.ki}
          </li>
          <li>
            <strong>Max Ki:</strong> {char.maxKi}
          </li>
        </ul>
        <Link to={`/biography/${char.id}`}>
          <img src={char.image} />
        </Link>
      </div>
    </div>
  )
}

export default Characters
