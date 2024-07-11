import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { getCharacter } from '../../services/api'
import Loader from '../../components/loader/Loader'
import Character from '../../components/character/Character'
import { CharsContext } from '../../context/CharsContext'

const Biography = () => {
  const path = useLocation()
  const id = path.pathname.split('/')[2]
  const url = getCharacter(id)

  const {
    state: { char },
    loading,
    getChar
  } = useContext(CharsContext)

  useEffect(() => {
    getChar(url)
  }, [id, getChar, url])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Character char={char} />
        </div>
      )}
    </>
  )
}
export default Biography
