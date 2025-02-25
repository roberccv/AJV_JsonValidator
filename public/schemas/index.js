const Ajv2020 = require("ajv/dist/2020"); 
const ajv = new Ajv2020();

const schemaHelado = require("./helado.schema.json");
const schemaCoche = require("./coche.schema.json");

ajv.addSchema(schemaHelado, "helado");
ajv.addSchema(schemaCoche, "coche");

//export default ajv; Este no porque tendría que hacer un import en el otro archivo en vez de un require
module.exports = ajv;