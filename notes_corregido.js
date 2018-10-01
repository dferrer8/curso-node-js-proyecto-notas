console.log('Módulo de notas cargado')
const { saveNotes, fetchNotes } = require('./utils')

const addNote = (title, body) => {
  const notes = fetchNotes()
  const note = {
    title,
    body
  }

  const duplicados = notes.filter(
    (note) => note.title === title
  )
  if (!duplicados.length) {
    notes.push(note)

    saveNotes(notes)
  } else {
    console.log('Nota no guardada porque ya existe')
  }
}

const removeNote = (title) => {
  const notes = fetchNotes()
  const filteredNotes = notes.filter(
    (note) => note.title !== title
  )
  saveNotes(filteredNotes)
  return (!filteredNotes.length !== notes.length)

  // Mejor en la app.js console.log(`Nota con titulo ${title} eliminada.`)
}

const getNote = (title) => { // readNote
  const notes = fetchNotes()
  // variante

  const myNotes = notes.find(
  // const myNotes = notes.filter(
    (note) => note.title === title
    // (note) => {return note.title === title}
  )
  return myNotes[0] // sera un array de un solo elemento
}

const getAll = () => {
  const notes = fetchNotes()
  return notes
}

const logNote = (note) => {
  console.log(`\tTítulo: ${note.title}`)
  console.log(`\tTexto: ${note.body}`)
}

module.exports = {
  addNote,
  removeNote,
  readNote,
  getAll,
  logNote

}
