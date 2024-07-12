import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  useReducer
} from 'react'
import { CharsContext } from './CharsContext'
import { initStateGame, stateGame } from '../reducer/game'

export const GameContext = createContext()

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateGame, initStateGame)
  const {
    state: { chars }
  } = useContext(CharsContext)
  const [selectedChars, setSelectedChars] = useState({
    bannerLeft: null,
    bannerRight: null
  })
  const randomChars = useCallback((chars) => {
    const index1 = Math.floor(Math.random() * chars.length)
    const index2 = Math.floor(Math.random() * chars.length)
    if (index1 === index2) {
      index2 - 1
      if (index2 < 0) {
        index2 + 2
      }
    }
    const bannerLeft = chars[index1]
    const bannerRight = chars[index2]
    return { bannerLeft, bannerRight }
  })
  useEffect(() => {
    setSelectedChars(randomChars(chars))
  }, [chars])

  //INIT GAME

  return (
    <GameContext.Provider
      value={{
        state,
        dispatch,
        selectedChars
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
