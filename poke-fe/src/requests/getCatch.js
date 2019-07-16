function getCatch(id) {
  if (localStorage !== undefined) {
    let catched = []
    if (localStorage.getItem('CATCHED') === null) {
      return false
    }
    console.log(catched)
    catched = JSON.parse(localStorage.getItem('CATCHED'))
    const index = catched.findIndex(catchPokemon => catchPokemon.id === id)
    return index !== -1
  }
}

export default getCatch
