import { useRef, useState } from 'react'
import './Music.css'

const Music = () => {
  return (
    <div className='contain-music'>
      <audio controls autoPlay loop>
        <source src='../../music/music-dragonball.mp3' type='audio/mpeg' />
      </audio>
    </div>
  )
}

export default Music
