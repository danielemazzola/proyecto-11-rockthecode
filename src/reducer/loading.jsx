export const initStateLoading = { loading: false, error: '' }

export const stateLoading = (state, action) => {
  switch (action.type) {
    case 'LOADING_TRUE':
      return { ...state, loading: true }
    case 'LOADING_FALSE':
      return { ...state, loading: false }
    case 'SET_ERROR':
      return { ...state, error: action.payload }

    default:
      state
  }
}
