import React, { useEffect, useMemo, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { getCharacter } from '../../services/api'
import Loader from '../../components/loader/Loader'
import Character from '../../components/character/Character'
import { CharsContext } from '../../context/CharsContext'

const Biography = () => {
  const path = useLocation()
  const {
    state: { loading, char },
    dispatch
  } = useContext(CharsContext)
  const id = path.pathname.split('/')[2]

  useEffect(() => {
    const fetchCharacter = async () => {
      dispatch({ type: 'LOADING_TRUE' })
      try {
        const character = await getCharacter(id)
        return dispatch({ type: 'SET_CHAR', payload: character })
      } catch (error) {
        console.error('Error fetching character:', error)
      } finally {
        setTimeout(() => {
          dispatch({ type: 'LOADING_FALSE' })
        }, 2000)
        return
      }
    }
    if (id !== String(char.id)) {
      fetchCharacter()
    }
  }, [id])

  if (loading) return <Loader />
  else
    return (
      <div>
        <Character char={char} />
      </div>
    )
}
export default Biography
