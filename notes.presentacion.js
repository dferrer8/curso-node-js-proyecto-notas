const fs = require('fs')

const addNote = (title, body) => {
  let notes = []
  const note = {
    title,
    body
  }

  const notesString = fs.readFileSync('notes-data.json')
  notes = JSON.parse(notesString)

  notes.push(note)
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}
