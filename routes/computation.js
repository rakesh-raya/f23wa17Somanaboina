var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const functionName = getRandomFunction();
    const x = req.query.x || Math.random();
    let result;
    switch (functionName) {
      case 'acosh':
        result = Math.acosh(x);
        break;
      case 'log1p':
        result = Math.log1p(x);
        break;
      case 'tan':
        result = Math.tan(x);
        break;
      case 'sqrt':
        result = Math.sqrt(x);
        break;
      default:
        result = 'Invalid function';
    }
    const response = `${functionName} applied to ${x} is ${result}`;
    res.send(response);
});

function getRandomFunction() {
    const functions = ['acosh', 'log1p', 'tan', 'sqrt'];
    const randomIndex = Math.floor(Math.random() * functions.length);
    return functions[randomIndex];
  }

module.exports = router;