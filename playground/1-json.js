const fs = require('fs')
/* const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON) */

/* const parseData = JSON.parse(bookJSON)
console.log(parseData.author) */
/* const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.title) */

// Work with JSON and the file system
//
// 1. Load and parse the JSON data.
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON file

const me = {
    name: 'Jorge',
    planet: 'Earth',
    age: '36'
}

meJSON = JSON.stringify(me);
fs.writeFileSync('1-json.json', meJSON)
