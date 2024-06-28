export const getCharacters = async (limit) => {
  const uri = `https://dragonball-api.com/api/characters?page=1&limit=${limit}`
  try {
    const response = await fetch(uri)
    const data = await response.json()
    return data.items
  } catch (error) {
    console.error('Failed to fetch characters:', error)
    return
  }
}

export const getCharacter = async (id) => {
  const uri = `https://dragonball-api.com/api/characters/${id}`
  try {
    const response = await fetch(uri)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch characters:', error)
    return
  }
}
