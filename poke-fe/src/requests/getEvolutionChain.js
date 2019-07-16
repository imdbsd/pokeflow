import getPokemonSpecies from './getPokemonSpecies'
import { extractChain } from '../utils'

async function getEvolutionChain(id) {
  try {
    const pokemon = await getPokemonSpecies(id)
    const request = await fetch(pokemon.evolution_chain.url)
    if (request.status === 200) {
      const { chain } = await request.json()
      const evolves = extractChain(chain)
      console.log({ evolves })
      if (evolves.length > 1) {
        const currentFormIndex = evolves.findIndex(
          evolve => evolve.speciesName === pokemon.name
        )
        if (currentFormIndex < evolves.length - 1) {
          return evolves.slice().splice(currentFormIndex, 2)
        } else {
          return evolves.slice().splice(currentFormIndex - 1, 2)
        }
      }
      return evolves
    }
    return false
  } catch (e) {
    console.log(e)
    return false
  }
}

export default getEvolutionChain
