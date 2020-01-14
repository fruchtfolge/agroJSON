const fs = require('fs')
const util = require('util')
const Ajv = require('ajv')
const ajv = new Ajv({allErrors: true})
const agroJSON = require('../agroJSON.schema.json')

const readdir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

;(async () => {
  try {
    // check if schema compiles
    const validate = ajv.compile(agroJSON)
    if (!validate.errors) {
      console.log('Schema parsed succesfully!')
    }
    // validate against example files
    const examples = await readdir('./examples')
    for (let i = 0; i < examples.length; i++) {
      const exampleString = await readFile(`./examples/${examples[i]}`, 'utf8')
      const example = JSON.parse(exampleString)
      const valid = validate(example)
      if (!valid) throw Error(JSON.stringify(validate.errors))
    }
  } catch (e) {
    console.log("Test failed!")
    console.log(e.message)
  }
})()


