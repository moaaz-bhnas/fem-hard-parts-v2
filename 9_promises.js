/**
 * When you send an async request to the browser,
 * how do you track the status of that request?
 * In the callback model, you don't have any kind of status in the memory
 */

/** Promises (fetch)
 * fetch is a 2 pronged facade function
 * 1. It does setup a network request to the browser
 * 2. It's gonna have a consequence immedietly in JavaScript world
 * It stores an object (promise) in the memory that gets updated
 * and the background work is done, it's gonna that object
 */
