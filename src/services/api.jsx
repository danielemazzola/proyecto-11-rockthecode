export const getCharacters = (limit) => {
  const uri = `${import.meta.env.VITE_API_URL}?page=1&limit=${limit}`
  return uri
}

export const getCharacter = (id) => {
  const uri = `${import.meta.env.VITE_API_URL}/${id}`
  return uri
}
