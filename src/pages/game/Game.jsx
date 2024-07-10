import { useContext } from 'react'
import './Game.css'
import { GameContext } from '../../context/GameContext'

const Game = () => {
  const { selectedChars } = useContext(GameContext)

  const { bannerLeft, bannerRight } = selectedChars

  return (
    <div className='container'>
      <div className='banner-battle-chars'>
        <img src={bannerLeft?.image} />
      </div>
      <div>
        <div>
          <h3 className='title'>Torneo de las Artes Marciales</h3>
          <p className='description'>
            Un juego de preguntas y respuestas basado en Dragon Ball, donde
            seleccionas a tu personaje favorito y compites contra otro personaje
            elegido al azar. Responde preguntas correctamente para ganar puntos
            y derrota a tu adversario en el torneo.
          </p>
        </div>
        <div className='contain-info'>
          <h4 className='section-title'>Mecánica del Juego</h4>
          <ul>
            <li>
              Selección de personaje: Elige tu personaje favorito de una lista.
            </li>
            <li>
              Asignación de adversario: El juego asigna un personaje adversario
              de manera aleatoria.
            </li>
            <li>
              Ronda de preguntas:
              <ul>
                <li>Las preguntas se presentan en rondas alternas.</li>
                <li>Cada pregunta acertada añade un punto al jugador.</li>
                <li>
                  Cada pregunta fallida resta un punto al jugador y suma un
                  punto al adversario.
                </li>
              </ul>
            </li>
            <li>
              Categorías de preguntas: Historia de Dragon Ball, Poderes y
              habilidades, Personajes, Batallas y eventos.
            </li>
          </ul>
        </div>
      </div>
      <div className='banner-battle-chars'>
        <img src={bannerRight?.image} />
      </div>
    </div>
  )
}

export default Game
