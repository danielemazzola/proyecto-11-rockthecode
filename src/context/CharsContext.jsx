import React, {
  createContext,
  useEffect,
  useReducer,
  useState,
  useCallback
} from 'react'
import useFetch from '../hook/useFetch'
import { initCharsState, stateChars } from '../reducer/chars'
import { getCharacters, getCharacter } from '../services/api'

export const CharsContext = createContext()

export const CharsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateChars, initCharsState)
  const [charUrl, setCharUrl] = useState(null)
  const { data: charData, loadingState: charLoadingState } = useFetch(charUrl)
  const limit = 58 //RETURN CHARACTERS
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

  useEffect(() => {
    if (charData) {
      dispatch({ type: 'SET_CHAR', payload: charData })
    }
  }, [charData, dispatch])

  const getChar = useCallback((url) => {
    setCharUrl(url)
  }, [])

  return (
    <CharsContext.Provider value={{ state, dispatch, loading, getChar }}>
      {children}
    </CharsContext.Provider>
  )
}
