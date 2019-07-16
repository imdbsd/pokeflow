async function getPokemonSpecies(id) {
  try {
    const request = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    )
    if (request.status === 200) {
      const response = await request.json()
      return response
    }
    return false
  } catch (e) {
    console.log(e)
    return false
  }
}

export default getPokemonSpecies
