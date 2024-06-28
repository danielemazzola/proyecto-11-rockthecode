import { Link, Outlet } from 'react-router-dom'
import './layout.css'
import Music from '../music/Music'

const Layout = () => {
  return (
    <>
      <header>
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
      </header>
      <main>{<Outlet />}</main>
    </>
  )
}

export default Layout
