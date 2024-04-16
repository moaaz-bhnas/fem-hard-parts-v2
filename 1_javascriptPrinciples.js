/** Feature 1: Thread of execution
 * JS engine going through the code line-by-line and executing it
 */

/** Feature 2: Memory
 * JS engine saving variables and function that it encounters in compute's memory
 * From JS foundation course (review the repo from 5_scope):
 * First the compiler creates a plan for these variables
 * then when the thread of execution starts, it store all the variables according to the compiler plan
 * Notes:
 * - Function declarations are save as is
 * - variables with var are saved as undefined
 * - with let and const are saved as uninitalized (TDZ)
 * - then assigned when the execution thread reaches them
 */

/** Execution Context
 * Thread of execution + memory together form an execution context
 * Running any function creates a new execution context
 * global execution context: running the file of code (main program)
 */

/** Feature 3: Call stack
 * The data structure that JS engine uses to keep track of what function is currently running
 * (Where's the thread of exection)
 * Once a function finishes running, it pops off the call stack
 * Always at the bottom is the global exection context
 */
