import axios, { AxiosResponse } from 'axios'

interface IAPIGetPokemons {
    count: number
    next: string | null
    previous: string | null
    results: [
        {
            name: string
            url: string
        }
    ]
}
interface IPokemons {
    id: number  
    name: string
    url: string
}

interface IGetPokemonsArgs {
    url?: string
}

async function getPokemons(obj: any, args: IGetPokemonsArgs, context: any, info: any): Promise<{pokemons: IPokemons[]} | boolean> {
    try {
        let {url} = args
        const limit = 20
        if(!url) {
            url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
        }
        const response: AxiosResponse<IAPIGetPokemons>  = await axios({
            method: 'GET',
            url
        })

        if(response.status === 200) {
            let {results, ...rest} = response.data
            const pokemons: IPokemons[] = results.map(result => {
                return {
                  ...result,
                  id: parseInt(
                    result.url.split('https://pokeapi.co/api/v2/pokemon/')[1]
                  )
                }
              })
              return {
                ...rest,
                pokemons
            }
        }
        return false
    }
    catch(e) {
        console.log(e)
        return false
    }
}

// getPokemons({}, {}, {}, {}).then(res => console.log(res))

export default getPokemons