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
        <div className='contain-logo'>
          <Link to='/'>
            <img
              className='logo'
              src='../../images/logo.webp'
              alt='Logo DragonBall'
            />
          </Link>
          <div className='container-banner-game'>
            <Link to='./game'>
              <img
                className='banner'
                src='https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1790600/extras/DBSZ_Middle_-_Steam_Gif_Chara.gif?t=1719379676'
                alt='Banner Gif DragonBall'
              />
              <p>GAME</p>
            </Link>
          </div>
        </div>
        <Music />
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
