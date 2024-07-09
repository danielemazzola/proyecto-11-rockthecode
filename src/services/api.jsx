export const getCharacters = async (limit) => {
  const uri = `${import.meta.env.VITE_API_URL}?page=1&limit=${limit}`
  try {
    const data = await responseData(uri)
    return data
  } catch (error) {
    console.error('Failed to fetch characters:', error)
    return
  }
}

export const getCharacter = async (id, dispatch) => {
  const uri = `${import.meta.env.VITE_API_URL}/${id}`
  try {
    const data = await responseData(uri)
    return data
  } catch (error) {
    console.error('Failed to fetch character:', error)
  }
}

const responseData = async (uri) => {
  const response = await fetch(uri)
  const data = await response.json()
  return data
}
