function addCatch(pokemon, status) {
  if (localStorage !== undefined) {
    let catched = []
    if (localStorage.getItem('CATCHED') !== null) {
      catched = JSON.parse(localStorage.getItem('CATCHED'))
    }
    if (status === 'add') {
      catched.push(pokemon)
    } else if (status === 'remove') {
      const index = catched.findIndex(
        catchPokemon => catchPokemon.id === pokemon.id
      )
      if (index !== -1) {
        catched.splice(index, 1)
      }
    }
    localStorage.setItem(`CATCHED`, JSON.stringify(catched))
    return true
  }
}

export default addCatch
