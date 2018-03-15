var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
}

function listIt() {
  for (var fcycle in data){
    var tempName = data[fcycle].name;
    var tempAge = data[fcycle].age;
    var tempFollowers = "";
    var tempFollowed = "";
    for(var i = 0; i < data[fcycle].follows.length; i++){
      if (data[fcycle].follows[i] != data[fcycle]){
        tempFollowers += data[data[fcycle].follows[i]].name;
        tempFollowers += " ";
      }
    }

    for (var fcycle2 in data){
        // console.log("fcycle2 " + fcycle2);
        // console.log("this fcycle2 " +  data[fcycle2].name);
      for (var i = 0; i < data[fcycle2].follows.length; i++){

        if (fcycle == data[fcycle2].follows[i]){
          tempFollowed += data[fcycle2].name;
          tempFollowed += " ";
        }
      }
    }

    console.log("Name: " + data[fcycle].name + "\n  Followers:\n   " + tempFollowers + "\n  followed by:\n   " + tempFollowed + "\n");
  }
}

function mostFollowing() {
  var winner = '';
  var winnerCount;
  for (var fcycle in data){
    if (winner === ''){
      winner = data[fcycle].name;
      winnerCount = data[fcycle].follows.length;
    }
    if (winnerCount < data[fcycle].follows.length){
      winner = data[fcycle].name;
      winnerCount = data[fcycle].follows.length;
    }
  }
  console.log(winner + " follows the most with: " + winnerCount);
}

function mostFollowers() {
  var winner = '';
  var winnerCount = 0;
  var tempCount = 0;

  for (var fcycle in data){
    for (var fcycle2 in data){
      for (var i = 0; i < data[fcycle2].follows.length; i++){
        if (fcycle == data[fcycle2].follows[i]){
        tempCount++;
        }
      }
      if(tempCount > winnerCount){
        winnerCount = tempCount;
        winner = data[fcycle].name;
      }
    }
    tempCount = 0;
  }
  console.log(winner + " has the most followers with: " + winnerCount);
}

function mostFollowersThirtyPlus() {
  var winner = '';
  var winnerCount = 0;
  var tempCount = 0;

  for (var fcycle in data){
    for (var fcycle2 in data){
      for (var i = 0; i < data[fcycle2].follows.length; i++){
        if (fcycle == data[fcycle2].follows[i] && data[fcycle2].age >= 30){
        tempCount++;
        }
      }
      if(tempCount > winnerCount){
        winnerCount = tempCount;
        winner = data[fcycle].name;
      }
    }
    tempCount = 0;
  }
  console.log(winner + " has the most followers over 30 with: " + winnerCount);
}

function mostFollowingThirtyPlus() {
  var winner = '';
  var winnerCount = 0;
  var tempCount = 0;
  for (var fcycle in data){
    for (var fcycle2 in data){
      for (var i = 0; i < data[fcycle].follows.length; i++){
        if (data[fcycle].follows[i] == fcycle2 && data[fcycle2].age >= 30){
        tempCount++;
        }
      }
      if(tempCount > winnerCount){
        winnerCount = tempCount;
        winner = data[fcycle].name;
      }
    }
    tempCount = 0;
  }

  console.log(winner + " follows the most people over 30 with: " + winnerCount);
}

function noFollowBack(){
  for (var fcycle in data){
    var tempName = data[fcycle].name;
    var notFollowed = "";
    for (var fcycle2 in data){
      var found = false;
      for (var i = 0; i < data[fcycle].follows.length; i++){
        if (data[fcycle].follows[i] === fcycle2){
          for (var u = 0; u < data[fcycle2].follows.length; u++){
            if (data[fcycle2].follows[u] === fcycle){
              found = true;
            }
          }
        }
      }
      if (!found && fcycle != fcycle2){
        notFollowed += data[fcycle2].name;
        notFollowed += ' ';
      }
    }
    console.log("Name: " + data[fcycle].name + "\n  Not followed back by:\n   " + notFollowed + "\n");
  }
}

function reach(){
  for (var fcycle in data){
    var tempName = data[fcycle].name;
    var reach = 0;
    reach += data[fcycle].follows.length
      for (var i = 0; i < data[fcycle].follows.length; i++){
        reach += data[data[fcycle].follows[i]].follows.length;
    }
    console.log("Name: " + data[fcycle].name + "\n  Social Reach: " + reach + "\n");
  }
}

listIt();
mostFollowing();
mostFollowers();
mostFollowersThirtyPlus();
mostFollowingThirtyPlus();
noFollowBack();
reach();