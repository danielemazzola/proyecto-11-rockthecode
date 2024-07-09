import { createContext, useCallback, useEffect, useReducer } from 'react'
import { initThemeState, stateTheme } from '../reducer/theme'

export const ThemeContext = createContext({
  state: initThemeState,
  toggleTheme: () => null
})

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateTheme, initThemeState)

  const toggleTheme = useCallback(() => {
    dispatch({
      type: state.theme === 'light' ? 'THEME_DARK' : 'THEME_LIGHT'
    })
  }, [state.theme, dispatch])

  useEffect(() => {
    localStorage.setItem('theme', state.theme)
  }, [state.theme])

  return (
    <ThemeContext.Provider
      value={{
        state,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
