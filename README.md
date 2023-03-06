Question One
What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.

Answer
Mutating array methods modify the original array on which they are called, whereas non-mutating array methods do not modify the original array and return a new array instead.

Here are 5 array methods that fall under each of these categories:

Mutating array methods:

1). push() - adds one or more elements to the end of the array.
2). pop() - removes the last element from the array.
3). splice() - adds or removes elements from the array at a specified index.
4). sort() - sorts the elements of an array in place.
5). reverse() - reverses the order of the elements in an array in place.

Non-mutating array methods:

1). concat() - combines two or more arrays and returns a new array.
2). slice() - returns a new array with a portion of the original array.
3). filter() - creates a new array with all elements that pass the test implemented by the provided function.
4). map() - creates a new array with the results of calling a provided function on every element in the array.
5). reduce() - applies a function against an accumulator and each element in the array to reduce it to a single value, returning a new array.

Question three
What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}

['apple', 'mango', 'orange'].