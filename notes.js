console.log('Módulo de notas cargado')

const addNote = () => {
  console.log('Nueva nota')
  return 'Nueva nota'
}

const removeNote = (id) => {
  console.log(`Nota con id ${id} borrada.`)
  return 'Nota eliminada'
}

const listNote = () => {
  console.log('Listado de notas.')
  return 'Listado de notas'
}

const readNote = (id) => {
  console.log(`Esta es la nota con id ${id}.`)
  return 'Nota leída'
}
module.exports = {
  addNote,
  removeNote,
  listNote,
  readNote
}
