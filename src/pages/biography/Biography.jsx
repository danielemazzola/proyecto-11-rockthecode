import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getCharacter } from '../../services/api'
import Loader from '../../components/loader/Loader'
import Character from '../../components/character/Character'

const Biography = () => {
  const path = useLocation()
  const [char, setChar] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const id = path.pathname.split('/')[2]
    setLoading(true)
    getCharacter(id).then((data) => setChar(data))
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) return <Loader />
  else
    return (
      <div>
        <Character char={char} />
      </div>
    )
}

export default Biography
