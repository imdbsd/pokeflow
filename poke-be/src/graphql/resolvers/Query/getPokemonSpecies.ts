import axios, { AxiosResponse } from 'axios'
interface IAPIPokemonSpecies {
    flavor_text_entries: Array<{
        flavor_text: string
        language: {
            name: string
        }
    }>
    evolution_chain: {
        url: string
    }
}

async function getPokemonSpecies(id: number) {
    try {
      const response: AxiosResponse<IAPIPokemonSpecies> = await axios({
          method: 'GET',
          url: `https://pokeapi.co/api/v2/pokemon-species/${id}`
      })
      if (response.status === 200) {
          const pokemonSpecies = response.data
          return pokemonSpecies
      }
      return false
    } catch (e) {
      console.log(e)
      return false
    }
  }
  
  export default getPokemonSpecies
  