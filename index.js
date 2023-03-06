//Question Two
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

//a Add 'Kotlin' to the end of the array
languages.push('Kotlin');

//b Add 'Java' after 'Ruby'
languages.splice(3, 0, 'Java');

//c Remove the first item in the array
languages.shift();

//d Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift');

// Replace 'PHP' with 'Go' and 'Rust'
let index = languages.indexOf('PHP');
if (index !== -1) {
  languages.splice(index, 1, 'Go', 'Rust');
}

console.log(languages)


//Question Four

function max(numbers) {
    let maxNum = numbers[0]
    numbers.filter(function(number){
        if (number > maxNum) {
            maxNum = number
          }
        })
    return maxNum
}

  
console.log(max([4, 5, 10, -2, 30]))


// Question Five 
function valTimesIndex(arr) {
    return arr.map(function(val, index) {
      return val * index;
    });
  }

console.log(  valTimesIndex([2,4,8]))