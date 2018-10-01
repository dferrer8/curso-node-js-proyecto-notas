console.log('Módulo de notas cargado')

/* const addNote = (title, contenido) => {
  console.log(`Nueva nota con ${title}, ${contenido}`)
  return 'Nueva nota'
} */

// Ejemplo

const fs = require('fs')
/*
const utils = require (./utils)
const { saveNotes, fetchNotes} = utils
*/
const { saveNotes, fetchNotes } = require('./utils')

const addNote = (title, body) => {
  // let notes = []
  // const notes = utils.fetchNotes()
  const notes = fetchNotes()
  const note = {
    title,
    body
  }

  /*  let notesString // defino fuera como let, porque si se quedase dentro de las llaves seria solo en ese ambito.
  try {
    notesString = fs.readFileSync('notes-data.json')
    notes = JSON.parse(notesString)
  } catch (error) {
  // notes = [] Lo podemos dejar vacio ya que notes se ha definido al principio.
    // console.log(error)
  }

  // antes de guardar
*/
  const duplicados = notes.filter((note) => note.title === title)
  // if (duplicados.length === 0) {
  if (!duplicados.length) {
    notes.push(note) // añade al array por medio del metodo push del array
    //  fs.writeFileSync('notes-data.json', JSON.stringify(notes)) en una sola línea
    // notesString = JSON.stringify(notes)
    // fs.writeFileSync('notes-data.json', notesString)

    saveNotes(notes)
  } else {
    console.log('Nota no guardada porque ya existe')
  }
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
