import React, { createContext, useEffect, useReducer } from 'react'
import { initCharsState, stateChars } from '../reducer/chars'
import { getCharacters } from '../services/api'

export const CharsContext = createContext()

export const CharsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateChars, initCharsState)

  useEffect(() => {
    const fetchCharacters = async () => {
      dispatch({ type: 'TRUE' })
      const limit = 150
      try {
        const data = await getCharacters(limit)
        dispatch({ type: 'SET_CHARS', payload: data })
      } catch (error) {
        console.error('Error fetching characters:', error)
      } finally {
        dispatch({ type: 'FALSE' })
      }
    }
    if (state.chars.length === 0) {
      fetchCharacters()
    }
  }, [state.chars.length])

  return (
    <CharsContext.Provider value={{ state, dispatch }}>
      {children}
    </CharsContext.Provider>
  )
}
