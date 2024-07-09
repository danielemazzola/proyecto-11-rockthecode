import { useContext } from 'react'
import Characters from '../../components/characters/Characters'
import Loader from '../../components/loader/Loader'
import { CharsContext } from '../../context/CharsContext'
import './Home.css'

const Home = () => {
  const {
    state: { loading, chars }
  } = useContext(CharsContext)

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='contain-home'>
          <div className='contain-cards'>
            {chars.map((char, index) => (
              <div key={index}>
                <Characters char={char} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Home
