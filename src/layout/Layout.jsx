import { Link, Outlet } from 'react-router-dom'
import './layout.css'
import Music from '../music/Music'
import ToggleTheme from '../components/toggleTheme/ToggleTheme'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Layout = () => {
  const {
    state: { theme }
  } = useContext(ThemeContext)

  return (
    <>
      <header className={`${theme === 'light' ? 'light' : 'dark'}`}>
        <Link to='/'>
          <div className='contain-logo'>
            <img
              className='logo'
              src='../../images/logo.webp'
              alt='Logo DragonBall'
            />
            <img
              className='banner'
              src='https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1790600/extras/DBSZ_Middle_-_Steam_Gif_Chara.gif?t=1719379676'
              alt='Banner Gif DragonBall'
            />
          </div>
          <Music />
        </Link>
        <div className='toggleBtn'>
          <ToggleTheme />
        </div>
      </header>
      <main className={`${theme === 'light' ? 'light' : 'dark'}`}>
        {<Outlet />}
      </main>
    </>
  )
}

export default Layout
