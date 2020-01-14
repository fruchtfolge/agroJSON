// build fake JSON files following the agroJSON schema
const fs = require('fs')
const util = require('util')
const jsf = require('json-schema-faker')

const writeFile = util.promisify(fs.writeFile)
const agroJSON = require('./agroJSON.schema.json')

;(async () => {
  jsf.option('alwaysFakeOptionals', true)
  const fakeData = await jsf.resolve(agroJSON)
  await writeFile('examples/agroJSON.example.json', JSON.stringify(fakeData), 'utf8')

  // function to create a subset JSON example for the properties listed in each
  // file of the agroXML common specification: http://195.37.233.20/documentation/agroxml.html
  const createSubsetExample = async (name,properties) => {
    const subsetExample = properties.reduce((acc,prop) => {
      acc[prop] = fakeData[prop]
      return acc
    }, {})
    // await writeFile(`examples/${name}.example.json`, JSON.stringify(subsetExample), 'utf8')
  }

  // create an example JSON for a Field with the given properties
  const fieldProperties = [
    "NameOfField",
    "NumberOfField",
    "UniqueAreaID",
    "PartOfField",
    "EUNumberOfField",
    "ContractNumber",
    "Area",
    "SpatialData",
    "FieldBlockNumber",
    "Gemarkung",
    "Ackerzahl",
    "Gruenlandzahl",
    "LandUseRestriction",
    "SoilTexture",
    "Assessment",
    "DistanceFarmField"
  ]
  await createSubsetExample("Field",fieldProperties)
})()