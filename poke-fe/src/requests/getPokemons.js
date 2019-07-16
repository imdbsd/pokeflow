// @flow
// import { countPage } from '../utils'
type Pokemon = {
  name: string,
  url: string,
  id?: number
}
type ApiResponse = {
  count: number,
  next: string | null,
  previous: string | null,
  results: Array<Pokemon>
}
type GetPokemonsResponse = {
  pokemons: Array<Pokemon>
}
// type PaginationInfo = {
//   next: null | number,
//   previous: null | number,
//   pages: [number]
// }
async function getPokemons(
  page: number
): Promise<GetPokemonsResponse | boolean> {
  const limit = 20
  try {
    const request: Response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
    )
    console.log(request)
    if (request.status === 200) {
      const response: ApiResponse = await request.json()
      console.log({ response })
      response.results = response.results.map(result => {
        return {
          ...result,
          id: parseInt(
            result.url.split('https://pokeapi.co/api/v2/pokemon/')[1]
          )
        }
      })
      return {
        pokemons: response.results
      }
    }
    return false
  } catch (e) {
    console.log(e)
    return false
  }
}

export default getPokemons
