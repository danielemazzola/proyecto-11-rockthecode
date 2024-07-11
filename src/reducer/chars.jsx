export const initCharsState = { loading: false, chars: [], char: {}, error: '' }

export const stateChars = (state, action) => {
  switch (action.type) {
    case 'SET_CHARS':
      return { ...state, chars: action.payload }
    case 'SET_CHAR':
      return { ...state, char: action.payload }
    default:
      return state
  }
}
