/* const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Jorge Massón.')

// Append a message to note.txt
//
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text

fs.appendFileSync('notes.txt', 'new note appended') */
/* const add = require('./utils')

console.log(add(1, 3)) */

// Define and use a function in a new file
//
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing, message to console
/* const validator = require('validator')
const getNotes = require('./notes')

console.log(getNotes())
console.log(validator.isEmail('ejemplo@mail.com')) */

// Use the chalk library in your project
//
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success" to the sonsole in green
// 4. Test your work
/* import chalk from 'chalk';

console.log(chalk.yellow.bold.inverse('Success!')); */
/* const command = process.argv[2]

console.log(process.argv)

if(command === 'add'){
    console.log('Adding note')
} else if (command === 'remove') {
    console.log('Removing note!')
} */
const yargs = require('yargs')
const notes = require('./notes')

// Customize yargs version
yargs.version('1.1.0')

debugger

// Create add coment
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Node title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Node body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// add, remove, read, list

yargs.parse()