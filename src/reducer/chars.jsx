export const initCharsState = { loading: false, chars: [], char: {} }

export const stateChars = (state, action) => {
  switch (action.type) {
    case 'TRUE':
      return { ...state, loading: true }
    case 'FALSE':
      return { ...state, loading: false }
    case 'SET_CHARS':
      return { ...state, chars: action.payload }
    case 'SET_CHAR':
      return { ...state, char: action.payload }
    default:
      return state
  }
}
