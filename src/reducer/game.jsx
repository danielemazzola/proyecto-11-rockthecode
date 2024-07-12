export const initStateGame = {
  user: {},
  randomChar: {},
  score_user: 0,
  score_machina: 0,
  init: null
}

export const stateGame = (state, action) => {
  // aqui vamos a condicionar
  switch (action.type) {
    case 'NEW_USER_CHAR':
      return { ...state, user: action.payload }
    case 'NEW_MACHINE_CHAR':
      return { ...state, randomChar: action.payload }
    case 'SCORE_USER':
      return { ...state, score_user: action.payload }
    case 'SCORE_MACHINA':
      return { ...state, score_machina: action.payload }
    default:
      return state
  }
}
