/*#1 Fix the Error: Value vs. Reference Types
 https://edabit.com/challenge/3jZyJTfsXTXXwAQkA 
 
Create a function that returns true if two arrays contain identical values, and false otherwise.

To solve this question, your friend writes the following code:

function checkEquals(arr1, arr2) {
if (arr1 === arr2) {
  return true
 } else {
  return false
 }
}
But testing the code, you see that something is not quite right. Running the code yields the following results:

checkEquals([1, 2], [1, 3]) ➞ false
// Good so far...

checkEquals([1, 2], [1, 2]) ➞ false
// Yikes! What happened?
Rewrite your friend's code so that it correctly checks if two arrays are equal. The tests below should pass:*/
 
//Fix this broken code! My Solution
function checkEquals(arr1, arr2) {
	for( i=0; i<arr1.length; i++ ) {
		if (arr1[i]!==arr2[i]){
			return false
		}
	}
	for( i=0; i<arr1.length; i++ ) {
		if (arr1[i]==arr2[i]){
			return true 
		}
	}
}

//#2 Remove Duplicates from an Array
//https://edabit.com/challenge/Wd7WKqm95jhcAGATG
/* Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

Examples

removeDups([1, 0, 1, 0]) ➞ [1, 0]

removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]*/

function removeDups(array) {
	var finalarr = [];
	for(i=0; i< array.length; i++){
		if(finalarr.indexOf(array[i])<0)
			 finalarr.push(array[i]);
	}
	return finalarr;
}
