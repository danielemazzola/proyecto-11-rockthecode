import { useState, useEffect, useReducer } from 'react'
import { initStateLoading, stateLoading } from '../reducer/loading'

const useFetch = (uri) => {
  const [data, setData] = useState(null)
  const [loadingState, loadingDispatch] = useReducer(
    stateLoading,
    initStateLoading
  )

  useEffect(() => {
    const fetchData = async () => {
      loadingDispatch({ type: 'LOADING_TRUE' })
      try {
        const response = await fetch(uri)
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        loadingDispatch({ type: 'SET_ERROR', payload: error.message })
      } finally {
        setTimeout(() => {
          loadingDispatch({ type: 'LOADING_FALSE' })
        }, 2000)
      }
    }
    fetchData()
  }, [uri])
  return { data, loadingState }
}

export default useFetch
