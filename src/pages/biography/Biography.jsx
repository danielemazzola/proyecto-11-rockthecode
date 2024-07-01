import React, { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getCharacter } from '../../services/api'
import Loader from '../../components/loader/Loader'
import Character from '../../components/character/Character'
import { useApp } from '../../hook/useApp'

const Biography = () => {
  const path = useLocation()
  const { state, dispatch } = useApp()
  let id = path.pathname.split('/')[2]

  useEffect(() => {
    const fetchCharacter = async () => {
      dispatch({ type: 'TRUE' })
      try {
        const character = await getCharacter(id)
        console.log(state.char)
        return dispatch({ type: 'SET_CHAR', payload: character })
      } catch (error) {
        console.error('Error fetching character:', error)
      } finally {
        return dispatch({ type: 'FALSE' })
      }
    }

    fetchCharacter()
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
