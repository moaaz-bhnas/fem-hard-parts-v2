/** Generalized function
 * Instead of creating a function that prints a certain word,
 * you create a "generalized function" that takes an argument and prints whatever it is
 * so we don't know by reading the functiopn what it's gonna print
 * BUT .. what if we want a piece of logic also to be decided later by an agrument
 * you may not what to decide exactly what some of your functionality is until running the function "Higher Order Function"
 * Any function that takes in / returns out another function is a HOF
 * The function we pass is "callback" which is the core of Asynchronosity in JavaScript
 */

/** Example
 * You need a function that copies an array and multiply each element by 2
 * and another function that copies an array and divide each element by 5
 * and another function that copies an array and add 2 to each element
 * ...
 * Here, you have a pattern
 * you need a function that copies an array, manipulates it in some way, and then returns it
 */
function copyArrayAndManipulate(array, manipulate) {
  var result = [];
  for (var element of array) {
    result.push(manipulate(element));
  }
  return result;
}
