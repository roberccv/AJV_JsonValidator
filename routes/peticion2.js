var express = require('express');
var router = express.Router();

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
  const schema = "helado";
  if(validateSchema(json, schema)){
    res.status(200).send("El helado es válido");
  } else {
    res.status(400).send("El helado no es válido");
  }
});

module.exports = router;
