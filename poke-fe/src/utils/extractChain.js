function extractChain(chain) {
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
      item: !evoDetails ? null : evoDetails.item
    })

    evoData = evoData['evolves_to'][0]
  } while (!!evoData && evoData.hasOwnProperty('evolves_to'))
  return evoChain
}

export default extractChain
