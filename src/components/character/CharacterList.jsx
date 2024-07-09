import React from 'react'

const CharacterList = ({ char }) => {
  return (
    <>
      <li>
        <h1>{char.name}</h1>
      </li>
      <li>Race: {char.race}</li>
      <li>Gender: {char.gender}</li>
      <li>Affiliation: {char.affiliation}</li>
      <li>Ki: {char.ki}</li>
      <li>Max Ki: {char.maxKi}</li>
    </>
  )
}

export default CharacterList
