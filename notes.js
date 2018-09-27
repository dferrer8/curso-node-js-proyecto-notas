console.log('Módulo de notas cargado')

const addNote = (title, contenido) => {
  console.log(`Nueva nota con ${title}, ${contenido}`)
  return 'Nueva nota'
}

const removeNote = (title) => {
  // console.log(`Nota con id ${id} borrada.`)
  console.log(`Nota con titulo ${title} borrada.`)
  return 'Nota eliminada'
}

const listNote = () => {
  console.log('Listado de notas.')
  return 'Listado de notas'
}

const readNote = (title) => {
  console.log(`Esta es la nota con id ${title}.`)
  return 'Nota leída'
}
module.exports = {
  addNote,
  removeNote,
  listNote,
  readNote
}
