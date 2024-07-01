import Characters from '../../components/characters/Characters'
import Loader from '../../components/loader/Loader'
import { useApp } from '../../hook/useApp'
import './Home.css'

const Home = () => {
  const { state } = useApp()

  if (state.loading) return <Loader />
  else
    return (
      <div className='contain-home'>
        <div className='contain-cards'>
          {state.chars.map((char, index) => (
            <div key={index}>
              <Characters char={char} />
            </div>
          ))}
        </div>
      </div>
    )
}

export default Home
