const Ajv = require('ajv')
const ajv = new Ajv({allErrors: true})
const agroJSON = require('../agroJSON.schema.json')

try {
  // check if schema compiles
  const validate = ajv.compile(agroJSON)
  if (!validate.errors) {
    console.log('Schema parsed succesfully!')
  }
  // validate against example files
  
} catch (e) {
  console.log("Test failed!")
  console.log(e.message)
}

