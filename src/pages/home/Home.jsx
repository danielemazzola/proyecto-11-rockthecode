import React, { useEffect, useState } from 'react'
import Characters from '../../components/characters/Characters'
import './Home.css'
import Loader from '../../components/loader/Loader'

const Home = () => {
  const [chars, setChars] = useState([])
  const [loading, setLoading] = useState(false)
  const uri = 'https://dragonball-api.com/api/characters?page=1&limit=50'

  useEffect(() => {
    const getCharacters = async () => {
      try {
        setLoading(true)
        const response = await fetch(uri)
        const data = await response.json()
        setTimeout(() => {
          setLoading(false)
        }, 1000)
        return data.items
      } catch (error) {
        setLoading(false)
        console.error('Failed to fetch characters:', error)
        return
      }
    }

    getCharacters().then((data) => setChars(data))
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
