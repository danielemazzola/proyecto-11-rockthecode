export const initCharsState = { loading: false, chars: [], char: {} }

export const stateChars = (state, action) => {
  switch (action.type) {
    case 'LOADING_TRUE':
      return { ...state, loading: true }
    case 'LOADING_FALSE':
      return { ...state, loading: false }
    case 'SET_CHARS':
      return { ...state, chars: action.payload }
    case 'SET_CHAR':
      return { ...state, char: action.payload }
    default:
      return state
  }
}
