import React, { createContext, useEffect, useReducer } from 'react'
import { initCharsState, stateChars } from '../reducer/chars'
import { getCharacters } from '../services/api'

export const CharsContext = createContext()

export const CharsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateChars, initCharsState)
  const { chars } = state

  useEffect(() => {
    const fetchCharacters = async () => {
      dispatch({ type: 'LOADING_TRUE' })
      const limit = 58 //RETURN CHARACTERES
      try {
        const data = await getCharacters(limit)
        return dispatch({ type: 'SET_CHARS', payload: data.items })
      } catch (error) {
        return console.error('Error fetching characters:', error)
      } finally {
        setTimeout(() => {
          dispatch({ type: 'LOADING_FALSE' })
        }, 2000)
        return
      }
    }
    if (chars.length === 0) {
      fetchCharacters()
    }
  }, [chars.length])

  return (
    <CharsContext.Provider value={{ state, dispatch }}>
      {children}
    </CharsContext.Provider>
  )
}
