/** Why iterators
 * One can say that programming is all about storing data (state)
 * and functioning on that data
 * But to do anything with the data, you need to easily access it
 * Well, that's easy id the data is "string", 5, or false,
 * But also data comes as arrays, maps, trees, etc.
 * Before, as farmers, we would access an array elements with a loop
 * which makes us focus on "accessing" rather than the functionality
 *
 * 💡
 * What is somehow we can, for any structure, we can call a function that gets the next element
 * remembering where it's at
 * sense most of the times we're interested in accessing data one at a time
 * like a for loop
 */

for (let i = 0; i < arr.length; i++) {
  doSomething();
}
