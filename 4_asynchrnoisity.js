/**
 * Current model of JavaScript (execution context + call stack) is not enough
 * What if you're browsing Twitter and liked a tweet
 * with the current model of JS (single threaded), ou can't interact with other tweets
 * until your like is sent to Twitter's server, and comes back
 */

/**
 * We need to add some new components:
 * Web Browser APIs / Node nackground APIs
 * Promises
 * Even loop, Callback / Task queue and micro task queue
 */

/** Web browser
 * It doesn't only have a JS engine
 * It has a ton of non-JS features:
 * - devtools => console
 * - Network requests => fetch / XHR
 * - HTML DOM => document
 * - Timer => setTimeOut
 * - localstorage => localstorage
 * JavaScript only has a facade functions (functions that look like JS) that
 * lets us interact with those features
 */
