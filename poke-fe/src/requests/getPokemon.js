// @flow

async function getPokemon(key: number | string) {
  if (localStorage !== undefined) {
    const pokemon = localStorage.getItem(`POKEMON_${key}`)
    if (pokemon && pokemon !== null) {
      return JSON.parse(pokemon)
    }
  }
  try {
    const request: Response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${key}`
    )
    if (request.status === 200) {
      const response = await request.json()
      // if (localStorage !== undefined) {
      //   localStorage.setItem(`POKEMON_${key}`, JSON.stringify(response))
      // }
      return response
    }
    return false
  } catch (e) {
    console.log(e)
    return false
  }
}

export default getPokemon
