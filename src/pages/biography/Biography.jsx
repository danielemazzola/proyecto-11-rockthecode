import React, { useEffect, useMemo, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { getCharacter } from '../../services/api'
import Loader from '../../components/loader/Loader'
import Character from '../../components/character/Character'
import { CharsContext } from '../../context/CharsContext'

const Biography = () => {
  const path = useLocation()
  const { state, dispatch } = useContext(CharsContext)
  const id = path.pathname.split('/')[2]

  useEffect(() => {
    const fetchCharacter = async () => {
      dispatch({ type: 'TRUE' })
      try {
        const character = await getCharacter(id)
        return dispatch({ type: 'SET_CHAR', payload: character })
      } catch (error) {
        console.error('Error fetching character:', error)
      } finally {
        return dispatch({ type: 'FALSE' })
      }
    }
    if (id !== String(state.char.id)) {
      fetchCharacter()
    }
  }, [id])

  if (state.loading) return <Loader />
  else
    return (
      <div>
        <Character char={state.char} />
      </div>
    )
}
export default Biography
