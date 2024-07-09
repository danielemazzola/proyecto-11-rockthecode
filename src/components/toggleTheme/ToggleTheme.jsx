import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './ToggleTheme.css' // Asegúrate de importar el archivo CSS

const ToggleTheme = () => {
  const {
    state: { theme },
    toggleTheme
  } = useContext(ThemeContext)

  return (
    <button
      type='button'
      onClick={toggleTheme}
      className={`toggle-button ${
        theme === 'light' ? 'light-theme' : 'dark-theme'
      }`}
    >
      Toggle Theme
    </button>
  )
}

export default ToggleTheme
