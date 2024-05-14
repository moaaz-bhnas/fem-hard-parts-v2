/**
 * Instead of writing our iterators from scratch
 * JavaScript added a built-in constructor for iterators
 * How the following function works: https://www.canva.com/design/DAGEkXQ6OKQ/lTEZM9cbTSzk2PKZxznbWA/edit?utm_content=DAGEkXQ6OKQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
 */
function createFlow(array) {
  var i = 0;
  var inner = {
    next() {
      const element = array[i];
      i++;
      return element;
    },
  };
  return inner;
}

var returnNextElement = createFlow([1, 2, 3]);
// const element1 = returnNextElement.next();
// const element2 = returnNextElement.next();
// const element3 = returnNextElement.next();

/**
 * JavaScript now has a built-in tool that allows us to get the flow
 * of data, not from a collection
 * but from "intermediate returns"
 * Generators allow us to dynamically set what data flows to us
 * https://www.canva.com/design/DAGEkoKNjmc/QYq0Mvz_nWF6A_3cVcF19Q/edit?utm_content=DAGEkoKNjmc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
 */
function* createFlow() {
  const num = 10;
  const newNum = yield num;
  yield 5 + newNum;
  yield 6;
}

var returnNextElement = createFlow();
const element1 = returnNextElement.next();
const element2 = returnNextElement.next(2);

/**
 * Notice in the previous example, you're not just iterating
 * you're determining what element to return next by passing an argument
 * Also you're suspending the execution context of a function and resume it with next
 * Can't we utilize this model for asyncronous code
 * pause an async function execution context, then resume it with the fetched data (as argument)
 */
function resume(data) {
  generatorObject.next(data);
}

function* createFlow2() {
  const data = yield Promise.resolve(4);
  console.log(data);
}

const generatorObject = createFlow2();
const futureData = generatorObject.next();
futureData.value.then(resume);

/**
 * Async/await simplifies this design for us
 * JavaScript will auto trigger the resumption of createFlow2
 * execution context once the data is fetched
 * passing the reponse object back in as the evaluated result of the yield expression
 */

async function createFlow3() {
  console.log("1️⃣");
  const data = await Promise.resolve(5);
  console.log(data);
}

createFlow3();

console.log("2️⃣");
