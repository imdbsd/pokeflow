import axios, { AxiosResponse } from 'axios'
import getPokemonSpecies from './getPokemonSpecies'
import getEvolutionChain from './getEvolutionChain'

interface IAPIGetPokemon {
  name: string
  id: number
  height: number
  weight: number
  species: {
    name: string
    url: string
  }
  abilities: [
    {
      is_hidden: boolean
      ability: {
        name: string
        url: string
      }
    }
  ]
  sprites: {
    front_default: string
  }
  stats: [
    {
      base_stat: number
      stat: {
        name: string
      }
    }
  ]
  types: [{
    type: {
      name: string
    }
  }]
}

interface IFindPokemonByNameResponse {
  id: number
  name: string
  height: number
  weight: number
  sprites: string
  abilities: Array<{
    isHidden: boolean
    name: string
  }>
  stats: Array<{
    baseStat: number
    name: string
  }>
  types: string[]
  evolutionChain: Array<{
    id: number
    item: string | null
    minLevel: number | null
    speciesName: string
    triggerName: string
  }>
  desc: string
}

async function findPokemonByName(obj: any, args: {name: string}, context: any, info: any): Promise<IFindPokemonByNameResponse | boolean> {
    try {
        const {name} = args
        const response: AxiosResponse<IAPIGetPokemon>  = await axios({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${name}`
        })

        if(response.status === 200) {
            const species = await getPokemonSpecies(response.data.id)
            if(species) {
              const evoChain = await getEvolutionChain(species.evolution_chain.url, response.data.name)
              if(evoChain) {
                let pokemon = {
                  ...response.data,
                  sprites: response.data.sprites.front_default,
                  abilities: response.data.abilities.map(ability => {
                    return {
                      isHidden: ability.is_hidden,
                      name: ability.ability.name
                    }
                  }),
                  stats: response.data.stats.map(stat => {
                    return {
                      baseStat: stat.base_stat,
                      name: stat.stat.name
                    }
                  }),
                  types: response.data.types.map(type => {
                    return type.type.name
                  }),
                  desc: getDesc(species.flavor_text_entries),
                  evolutionChain: evoChain
                }
                return pokemon  
              }
               return false
            }
            return false
        }
        return false
    }
    catch(e) {
        console.log(e)
        return false
    }
}

function getDesc(flavor_text_entries: Array<{
  flavor_text: string
  language: {
      name: string
  }
}>): string {
  const flavour = flavor_text_entries.find(
    flavour => flavour.language.name === 'en'
  )
  if (flavour) {
    return flavour.flavor_text
  }
  return 'no description'
}

export default findPokemonByName