var express = require('express');
var router = express.Router();

const ajv = require('../public/schemas');

function validateSchema(json, schema){
  const validate = ajv.getSchema(schema);
  if (validate(json)) {
    return true;
  } else {
    return false;
  }
};
router.post('/', function(req, res, next) {
  const json = req.body;
  const schema = "coche";
  if(validateSchema(json, schema)){
    res.status(200).send("El coche es válido");
  } else {
    console.log(json);
    console.log(ajv.errors);
    res.status(400).send("El coche no es válido");
  }
});

module.exports = router;
