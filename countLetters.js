function countLetters(str){
  var noSpaces = str.toLowerCase().split(" ").join('');
  var objString = {};
  for (var i = 0; i < noSpaces.length; i++){
    if(objString[noSpaces[i]]){
      objString[noSpaces[i]]++;
    } else {
      objString[noSpaces[i]] = 1;
    }
  }
  return objString;
// console.log(objString);
}

// countLetters("lighthouse in the house")
console.log(countLetters("lighthouse in the house"));
