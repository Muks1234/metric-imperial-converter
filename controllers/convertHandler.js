/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result 
    let x = input

    if(x==="kg" || x==="L" || x==='l' || x === "mi" || x ==="gal" || x ==="lbs" || x ==="km"){
      result = 1  
    }
    else{

  //for kg input 
    if(x.indexOf("k")!==-1 && x.indexOf("g")!==-1){
    let y = x.split('')
    let unit = y.splice(x.indexOf("k")).join('')
    let num = Number(y.join(''))
  
    if(y.indexOf("/")!==-1){
      
    let str = y.join('')
    let myregex = /\//g
    console.log(str.match(myregex)) 
    let arr = str.match(myregex)

    if(arr.length ===1 ){
    y = y.join('')
    let a = y.split('')
    let b = a.splice(a.indexOf("/"))  
    a = parseFloat(a.join(''))  
    let c = parseFloat(b.slice(1).join(''))  
    let d = a/c
    num = d    
    }
    else{  
    num= "invalid number"
    }
    }
    //console.log(num)
    return num
    result = num;   
    }

    //for gal input
    else if(x.indexOf("g")!==-1 && x.indexOf("l")!==-1){
    let y = x.split('')
    console.log(y)
    let unit = y.splice(x.indexOf("g")).join('')
    let num = Number(y.join(''))
    console.log(num)
    //return num
      
    if(y.indexOf("/")!==-1){
    let str = y.join('')
    let myregex = /\//g
    console.log(str.match(myregex)) 
    let arr = str.match(myregex)

    if(arr.length ===1 ){
    y = y.join('')
    let a = y.split('')
    let b = a.splice(a.indexOf("/"))  
    a = parseFloat(a.join(''))  
    let c = parseFloat(b.slice(1).join(''))  
    let d = a/c
    num = d    
    }
    else{  
    num= "invalid number"
    }
    }
    console.log(num)
      return num
     result = num;
    }
      
  //for km input
    else if(x.indexOf("k")!==-1 && x.indexOf("m")!==-1){
    let y = x.split('')
    let unit = y.splice(x.indexOf("k")).join('')
    let num = Number(y.join(''))

    if(y.indexOf("/")!==-1){
    let str = y.join('')
    let myregex = /\//g
    console.log(str.match(myregex)) 
    let arr = str.match(myregex)

    if(arr.length ===1 ){
    y = y.join('')
    let a = y.split('')
    let b = a.splice(a.indexOf("/"))  
    a = parseFloat(a.join(''))  
    let c = parseFloat(b.slice(1).join(''))  
    let d = a/c
    num = d    
    }
    else{  
    num= "invalid number"
    }
    }

    return num
    result = num;
    }

  //for Litre input 
    else if(x.indexOf("L")!==-1){
    let y = x.split('')
    let unit = y.splice(x.indexOf("L")).join('')
    let num = Number(y.join(''))

    if(y.indexOf("/")!==-1){
    let str = y.join('')
    let myregex = /\//g
    console.log(str.match(myregex)) 
    let arr = str.match(myregex)

    if(arr.length ===1 ){
    y = y.join('')
    let a = y.split('')
    let b = a.splice(a.indexOf("/"))  
    a = parseFloat(a.join(''))  
    let c = parseFloat(b.slice(1).join(''))  
    let d = a/c
    num = d    
    }
    else{  
    num= "invalid number"
    }
    }
    result = num;  
    }

  //for miles input
    else if(x.indexOf("m")!==-1){
    let y = x.split('')
    let unit = y.splice(x.indexOf("m")).join('')
    let num = Number(y.join(''))

    if(y.indexOf("/")!==-1){
    let str = y.join('')
    let myregex = /\//g
    console.log(str.match(myregex)) 
    let arr = str.match(myregex)

    if(arr.length ===1 ){
    y = y.join('')
    let a = y.split('')
    let b = a.splice(a.indexOf("/"))  
    a = parseFloat(a.join(''))  
    let c = parseFloat(b.slice(1).join(''))  
    let d = a/c
    num = d    
    }
    else{  
    num= "invalid number"
    }
    }
     result = num;
    }
     
  

    //for lbs input
    else if(x.indexOf("l")!==-1 && x.indexOf("b")!==-1){
    let y = x.split('')
    let unit = y.splice(x.indexOf("l")).join('') 
    let num = Number(y.join(''))

    if(y.indexOf("/")!==-1){
    let str = y.join('')
    let myregex = /\//g
    //console.log(str.match(myregex)) 
    let arr = str.match(myregex)

    if(arr.length ===1 ){
    y = y.join('')
    let a = y.split('')
    let b = a.splice(a.indexOf("/"))  
    a = parseFloat(a.join(''))  
    let c = parseFloat(b.slice(1).join(''))  
    let d = a/c
    num = d;
    //console.log(num)
    }
    else{  
    num= "invalid number"  
      console.log(num)
    }
    }
    result = num;
    }
    //for l input
    else if(x.indexOf("l")!==-1){
    let y = x.split('')
    let unit = y.splice(x.indexOf("l")).join('') 
    let num = Number(y.join(''))

    if(y.indexOf("/")!==-1){
    let str = y.join('')
    let myregex = /\//g
    //console.log(str.match(myregex)) 
    let arr = str.match(myregex)

    if(arr.length ===1 ){
    y = y.join('')
    let a = y.split('')
    let b = a.splice(a.indexOf("/"))  
    a = parseFloat(a.join(''))  
    let c = parseFloat(b.slice(1).join(''))  
    let d = a/c
    num = d;
    //console.log(num)
    }
    else{  
    num= "invalid number"  
      //console.log(num)
    }
    }
    result = num; 
    }
    else {
      result = "invalid number"
    }
    }  
    console.log("initNum is",result)
    return result; 
  }; 
   
  this.getUnit = function(input) {
    let x = input
    var result; 

  //for kg input
    if(x.indexOf("k")!==-1 && x.indexOf("g")!==-1){
    let y = x.split('')
    let unit = y.splice(x.indexOf("k")).join('')
    let num = parseFloat(y.join(''))
    result = unit;
      if(unit!=="kg"){
        unit = "invalid unit"
      }
      console.log(unit)
    return unit  
    }
  //for km input
    else if(x.indexOf("k")!==-1 && x.indexOf("m")!==-1){
      let y = x.split('')
    let unit = y.splice(x.indexOf("k")).join('')
    let num = parseFloat(y.join(''))
    //console.log(unit)
    if(unit!=="km"){
        unit = "invalid unit"
      }
    result = unit;
    return unit
    } 

    //for Litre input
    else if(x.indexOf("L")!==-1){
    let y = x.split('')
    let unit = y.splice(x.indexOf("L")).join('')
    let num = parseFloat(y.join(''))
    if(unit!=="L"){
        unit = "invalid unit"
      }
    result = unit; 
    }

    //for miles input 
    else if(x.indexOf("m")!==-1){
    let y = x.split('')
    let unit = y.splice(x.indexOf("m")).join('')
    let num = parseFloat(y.join(''))
    if(unit!=="mi"){
        unit = "invalid unit"
      }
    result = unit;
    }

    //for gal input
    else if(x.indexOf("g")!==-1 && x.indexOf("a")!==-1 ){
    let y = x.split('')
    let unit = y.splice(x.indexOf("g")).join('') 
    let num = parseFloat(y.join(''))
    if(unit!=="gal"){
        unit = "invalid unit"
      }
    console.log(unit)
    result = unit;
    }
    //for lbs input
    else if(x.indexOf("l")!==-1 && x.indexOf("b")!==-1){
    let y = x.split('')
    let unit = y.splice(x.indexOf("l")).join('')
    let num = parseFloat(y.join(''))
    if(unit!=="lbs"){
        unit = "invalid unit"
      }
    result = unit;   
    }
    //for l input
    else if(x.indexOf("l")!==-1){
    let y = x.split('')
    let unit = y.splice(x.indexOf("l")).join('')
    let num = parseFloat(y.join(''))
    if(unit!=="l"){  
        unit = "invalid unit"
      }
    result = unit;   
    } 
    else{ 
      result = "invalid unit"
    }
      
    console.log("initunit is",result)

    //console.log(result)
    return result;
  };
   
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit){
      case "km":
        result = "mi"
        break;  
      case "mi":
        result = "km"
        break;
      case "kg":
        result = "lbs"
        break;
      case "lbs":
        result = "kg"
        break; 
      case "gal":
        result = "L"  
        break;
      case "L":
        result = "gal"
        break;
      case "l":
        result = "gal"
        break;
      default: result = "invalid unit"
        break;
    }
    console.log(result)
    return result;  
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit){
      case "km":
        result = "kilometers"
        break;
      case "mi":
        result = "miles"
        break;
      case "kg":
        result = "kilograms" 
        break;
      case "lbs":
        result = "pounds"
        break;
      case "gal": 
        result = "gallons"
        break;
      case "L":
        result = "litres"
        break;
      case "l":
        result = "litres"
        break;

    }
    return result;   
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592; 
    const miToKm = 1.60934;        
    var result;
   
   if(typeof(initNum)==="number" && initNum > 0){


   switch(initUnit){
      case "km":
        result = parseFloat((initNum/1.60934).toFixed(5));
        break;
      case "mi":
        result = parseFloat((initNum*1.60934).toFixed(5));  
        break;
      case "kg":  
        result = parseFloat((initNum/0.453592).toFixed(5)); 
        break;    
      case "lbs":
        result = parseFloat((initNum*0.453592).toFixed(5)); 
        break;
      case "gal": 
        result = parseFloat((initNum*3.78541).toFixed(5)); 
        break;   
      case "L": 
        result = parseFloat((initNum/3.78541).toFixed(5)); 
        break;
      case "l": 
        result = parseFloat((initNum/3.78541).toFixed(5)); 
        break;
    }      
       
   }
   else{
     result = "invalid number"
   }
   //console.log(result)
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) { 
    var result = `${initNum}${initUnit} converts to ${returnNum}${returnUnit} `  
    return result;
  }; 
   
} 
 
module.exports = ConvertHandler;
