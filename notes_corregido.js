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

module.exports = {
  addNote,
  removeNote
}
