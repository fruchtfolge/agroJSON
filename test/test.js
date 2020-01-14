try {
  var Ajv = require('ajv')
  var ajv = new Ajv({allErrors: true})
  var schema = require('../agroJSON.schema.json')
  var validate = ajv.compile(schema)
  if (!validate.errors) {
    console.log('Schema parsed succesfully!')
  }
  console.log(Object.keys(schema.properties));
} catch (e) {
  console.log("Test failed!")
  console.log(e.message)
}

