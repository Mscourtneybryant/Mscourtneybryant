var arr = [1999, 1994, 1990, 1998, 1991, 1997, 1993, 1996, 1995, 1992]
var arr2= [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]

var prompt = require('prompt-sync')();
var i = prompt('What year were you born?');

var birthYear= "1992"
console.log('The users birth year is 199' + birthYear.charAt(3))


found = false;

for(let i = 0; i < arr.length; i++){
  if(birthYear == arr[i]){
    console.log('The number is found in the ' + (i + 1) + ' position.')
    found=true;
    break;
  }
}
if (!found) {
  console.log('The users birth year is outside of the 90s range.')
}
count = 0;

for(var r = 0; r < birthYear.length; ++r){
    if(birthYear[r] == 1992)
       count++
    
console.log('The number of times ' + birthYear + ' appears is ' + count)
}