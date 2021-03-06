/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;  
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();
     
  app.route('/api/convert')   
    .get(function (req, res){
      var input = req.query.input;  
      var initNum = convertHandler.getNum(input);  
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      var initial_Units = convertHandler.spellOutUnit(initUnit);
      var return_Units = convertHandler.spellOutUnit(returnUnit);
    
    if(initNum === "invalid number" && initUnit === "invalid unit"){
            res.send("invalid number and unit")
    }       
    if(initNum === "invalid number"){  
      res.send("invalid number")  
    }
    if(initUnit === "invalid unit"){       
      res.send("invalid unit")
    }
         
    else{
      res.json({
        initNum: initNum, returnNum: returnNum, returnUnit: returnUnit,
        string: `${initNum} ${initial_Units} converts to ${returnNum} ${return_Units}`
      })   
    }    
  });
    
};
