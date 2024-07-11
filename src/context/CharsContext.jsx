import React, { createContext, useEffect, useReducer } from 'react'
import useFetch from '../hook/useFetch'
import { initCharsState, stateChars } from '../reducer/chars'
import { getCharacters } from '../services/api'

export const CharsContext = createContext()

export const CharsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateChars, initCharsState)
  const limit = 58 //RETURN CHARACTERES
  const url = getCharacters(limit)
  const {
    data,
    loadingState: { error, loading }
  } = useFetch(url)

  useEffect(() => {
    if (error) {
      console.log(error)
    } else if (data) {
      dispatch({ type: 'SET_CHARS', payload: data.items })
    }
  }, [data, dispatch])

  return (
    <CharsContext.Provider value={{ state, dispatch, loading }}>
      {children}
    </CharsContext.Provider>
  )
}
