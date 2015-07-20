var people = {
  "Brad":23,
  "Doofus": 82,
  "Jesus": 2015
}

function oldestPerson(people) {
  var oldest = "";
  var oldestAge = 0;
  for (i in people) {
    if (oldestAge < people[i])
      oldestAge = people[i];
      oldest = i;
  }
  return oldest + " " + oldestAge;
}

console.log(oldestPerson(people));


var string = "This is a long string, it's also SUPERDUPER dumb."

function longestWord(str) {
  str = str.split(' ');
  var longest = '';
  for (i in str) {
    str[i] = str[i].replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~() ]/g,"")
    if (str[i].length > longest.length) {
      longest = str[i];
    }
  }
  return longest;
}

console.log(longestWord(string));

function factorial(number, result){
  if (result === undefined) {
    result = 1;
  }
  if (number === 0) {
    return result;
  } else {
    result *= number;
    // console.log(result);
    return factorial(number - 1, result);
  }
}

console.log(factorial(12));
