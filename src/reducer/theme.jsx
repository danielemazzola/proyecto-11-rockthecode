export const initThemeState = {
  theme: localStorage.getItem('theme') || 'light'
}

export const stateTheme = (state, action) => {
  switch (action.type) {
    case 'THEME_LIGHT':
      return { ...state, theme: 'light' }
    case 'THEME_DARK':
      return { ...state, theme: 'dark' }
    default:
      return state
  }
}
