import React, { useEffect, useState } from 'react'
import Characters from '../../components/characters/Characters'
import './Home.css'
import Loader from '../../components/loader/Loader'
import { getCharacters } from '../../services/api'

const Home = () => {
  const [chars, setChars] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (chars.length) return
    else {
      setLoading(true)
      const limit = 20
      getCharacters(limit).then((data) => setChars(data))
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }, [])

  if (loading) return <Loader />
  else
    return (
      <div className='contain-home'>
        <div className='contain-cards'>
          {chars.map((char, index) => (
            <div key={index}>
              <Characters char={char} />
            </div>
          ))}
        </div>
      </div>
    )
}

export default Home
