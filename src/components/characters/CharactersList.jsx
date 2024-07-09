import React from 'react'

const CharactersList = ({ char }) => {
  return (
    <>
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
    </>
  )
}

export default CharactersList
