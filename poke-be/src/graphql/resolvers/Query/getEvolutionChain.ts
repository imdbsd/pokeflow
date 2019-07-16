import axios, { AxiosResponse } from 'axios'

interface IAPIEvolutionChain {
    chain: IChain[]
}
interface IChain {
    evolution_details: IevolutionDetails[],
    evolves_to: IChain[]
    species: {
        name: string,
        url: string
    }
}
interface IevolutionDetails {
    min_level: number,
    trigger: {name: string},
    item: string
}

async function getEvolutionChain(url: string, name: string) {
    try {
        const response: AxiosResponse<IAPIEvolutionChain> = await axios({
            method: 'GET',
            url
        })
        if(response.status === 200) {
            const evolves = extractChain(response.data.chain)
            // console.log({ evolves })
            if (evolves.length > 1) {
                const currentFormIndex = evolves.findIndex(
                    evolve => evolve.speciesName === name
                )
                if (currentFormIndex < evolves.length - 1) {
                    return evolves.slice().splice(currentFormIndex, 2)
                } else {
                    return evolves.slice().splice(currentFormIndex - 1, 2)
                }
            }
        }
    }
    catch(e) {
        console.log(e)
        return false
    }
}

function extractChain(chain: any): Array<any> {
    const evoChain = []
    let evoData = chain
  
    do {
      const evoDetails = evoData['evolution_details'][0]
  
      evoChain.push({
        id: parseInt(
          evoData.species.url.split(
            'https://pokeapi.co/api/v2/pokemon-species/'
          )[1]
        ),
        speciesName: evoData.species.name,
        minLevel: !evoDetails ? 1 : evoDetails.min_level,
        triggerName: !evoDetails ? null : evoDetails.trigger.name,
        item: !evoDetails ? null : (evoDetails.item ? evoDetails.item.name : null)
      })
  
      evoData = evoData['evolves_to'][0]
    } while (!!evoData && evoData['evolves_to'] !== undefined)
    return evoChain
  }

export default getEvolutionChain