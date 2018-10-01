console.log('Iniciando aplicación de notas')
const notes = require('./notes_corregido')
const yargs = require('yargs')

// const yargs = require('yargs')
// const argv = yargs.argv

const { argv } = require('yargs') // ES6: express operator

// console.log(argv)
const command = argv._[0]

// antes de yargs
// // console.log(process.argv[2])
// const command = process.argv[2]
// console.log(`Comando recibido ${command}`)

if (command === 'add') {
  // console.log(`Añadiendo nueva nota con título ${argv.title}`)
  notes.addNote(argv.title, argv.body)

  if (note) {
    console.log('Nota creada')
  }
} else if (command === 'remove') {
  notes.removeNote(argv.title)
  const notaBorrada = notes.removeNote(argv.title)


  // console.log(`Nota borrada ${argv.title}`)
} else if (command === 'list') {
  notes.listNote
  // console.log('Listado de notas')
} else if (command === 'read') {
  notes.readNote(argv.title)
  // console.log('Contenido de la nota')
} else {
  console.log('Comando desconocido')
}
// // notes.addNote()
// // notes.removeNote(7) // Pasaremos un parametro con id de nota
