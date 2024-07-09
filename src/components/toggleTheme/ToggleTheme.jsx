import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './ToggleTheme.css' // Asegúrate de importar el archivo CSS

const ToggleTheme = () => {
  const {
    state: { theme },
    toggleTheme
  } = useContext(ThemeContext)

  return (
    <button type='button' onClick={toggleTheme} className={`toggle-button`}>
      {theme === 'light' ? (
        <img
          alt='button toggle Dark'
          src='https://e.rpp-noticias.io/xlarge/2022/03/23/590859_1235906.jpg'
        />
      ) : (
        <img
          alt='button toggle Light'
          src='https://i.blogs.es/dd6512/las-transformaciones-de-goku/1366_2000.png'
        />
      )}
    </button>
  )
}

export default ToggleTheme
