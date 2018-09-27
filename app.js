console.log('Iniciando aplicación de notas')
const notes = require('./notes')

// console.log(process.argv[2])
const command = process.argv[2]
console.log(`Comando recibido ${command}`)
if (command === 'add') {
  console.log('Nota añadida')
} else if (command === 'remove') {
  console.log('Nota borrada')
} else if (command === 'list') {
  console.log('Listado de notas')
} else if (command === 'read') {
  console.log('Contenido de la nota')
} else {
  console.log('Comando desconocido')
}
// notes.addNote()
// notes.removeNote(7) // Pasaremos un parametro con id de nota
