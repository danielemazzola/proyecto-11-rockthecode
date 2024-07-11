import React, { useEffect, useMemo, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { getCharacter } from '../../services/api'
import Loader from '../../components/loader/Loader'
import Character from '../../components/character/Character'
import { CharsContext } from '../../context/CharsContext'
import useFetch from '../../hook/useFetch'

const Biography = () => {
  const path = useLocation()
  const id = useMemo(() => path.pathname.split('/')[2], [path.pathname])
  const url = getCharacter(id)

  const {
    state: { char },
    dispatch
  } = useContext(CharsContext)

  const {
    data,
    loadingState: { loading, error }
  } = useFetch(url)

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_CHAR', payload: data })
    } else if (error) {
      console.log(error)
    }
  }, [id, data])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Character char={char} />
        </div>
      )}
    </>
  )
}
export default Biography
