import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getCharacter } from '../../services/api'
import Loader from '../../components/loader/Loader'

const Biography = () => {
  const path = useLocation()
  const [char, setChar] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const id = path.pathname.split('/')[2]
    setLoading(true)
    getCharacter(id).then((data) => setChar(data))
    setTimeout(() => {
      console.log(char)
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) return <Loader />
  else
    return (
      <div>
        <p>{char.name}</p>
        <p>{char.race}</p>
        <p>{char.gender}</p>
        <p>{char.affiliation}</p>
        <p>{char.description}</p>
        <p>{char.ki}</p>
        <p>{char.maxKi}</p>
        <img src={char.image} />
        <img src={char.originPlanet?.image} />
        <p>{char.originPlanet?.name}</p>
        <p>{char.originPlanet?.description}</p>
        <p>{char.originPlanet?.isDestroyed}</p>
        {char.transformations?.map((el) => (
          <>
            <p>{el.name}</p>
            <img src={el.image} />
            <p>{el.ki}</p>
          </>
        ))}
      </div>
    )
}

export default Biography
