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

/**
 * That function needs to hold both:
 * 1. the structure we need to iterate
 * 2. the position (index) we're currently at
 * 3. return the next element
 */

/** Return a function inside a function
 * When we do that, we get so much more than just a function .. CLOSURE
 * How the code works: https://www.canva.com/design/DAGEhZPtXkQ/0FmpTdXny66qba5_PXwd7Q/edit?utm_content=DAGEhZPtXkQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
 */
function createFunction(array) {
  var i = 0;
  function inner() {
    const element = array[i];
    i++;
    return element;
  }
  return inner;
}
var returnNextElement = createFunction([1, 2, 3]);
const element1 = returnNextElement();
const element2 = returnNextElement();
