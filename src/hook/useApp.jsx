import { useContext } from 'react'
import { CharsContext } from '../context/Context'

export const useApp = () => {
  return useContext(CharsContext)
}
