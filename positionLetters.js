function positionLetters(str){
  var noSpaces = str.toLowerCase();
  var objString = {};
  for (var i = 0; i < noSpaces.length; i++){
    if(objString[noSpaces[i]]){
      objString[noSpaces[i]].push(i);
    } else {
      objString[noSpaces[i]] = [i];
    }
  }
  delete objString[" "];
  return objString;
// console.log(objString);
}

// countLetters("lighthouse in the house")
console.log(positionLetters("lighthouse in the house"));