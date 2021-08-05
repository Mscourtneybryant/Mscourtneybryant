var arr = [1999, 1994, 1990, 1998, 1991, 1997, 1993, 1996, 1995, 1992]
var arr2= [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]

var prompt = require('prompt-sync')();
var i = prompt('What year were you born?');

var birthYear= "1992"
console.log('The users birth year is 199' + birthYear.charAt(3))

count = 0;
found = false;

for(let i = 0; i < arr.length; i++){
  if(arr<=birthYear[i]){
    found=true;
    count++
  }
}
if (!found) {
  console.log('The users birth year is outside of the 90s range.')
}
console.log('The number of times ' + birthYear + ' appears is' + arr.indexOf())