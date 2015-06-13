function GeneratorMatrix(rows, column){
  var mainArray = [];
  var columnArray = [];
  var numRows = rows;
  var numColumn = column;

  for(var i =0; i < numColumn; i++){ /////////
    for(var j = 0; j< numRows; j++){
     columnArray.push(Math.floor((Math.random() * 100 - 1) + 1 )); 
    }
  mainArray.push(columnArray);
  columnArray = [];
 }  
console.log(mainArray);
}
var g = new GeneratorMatrix(3,3);


