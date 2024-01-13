/* 
Javascript Execution Context: accounts for how JS would run and execute 
the .js files.

Programs are divided into 2 phases for execution. Js runs the files
in two phases.

Whenever execution starts:
1. {} a Global execution context if formed which is referred by 
the keyword "this". For browser, this in global context is "Window"

2. Js is single threaded, the everything in it is a process.

3. Then Functional/Function Execution Context is there.

4. There is another context, called the Eval Execution Context which is
a property of the Global Object itself

5. Js code is created in 2 phases:
    i) Memory Creation Phase/Creation Phase: In this, only the memory
        is allocated for the variable and other declarations but no
        execution happens here.
    ii) Execution Phase: actual execution of the code happens here

Let's take a sample code below:
*/

let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

/*
The above code would be exeucted in the following way:

1. Global Execution/ Global Environment which is located inside "this"
All the code is loaded inside the Global Execution no matter what.

2. Memory Creation Phase/Creation Phase -> val1: undefined
                                           val2: undefined
                                           addNum(): function definition
                                           result1: undefined
                                           result2: undefined
    -> In memory creation phase, all variables are initialized 
     with undefined as their value.

3. Execution Phase: actual execution of the code happens here
    Above code will be executed as:
    -> val1 = 10, val2 = 5

    -> Since the function definition is already contained in memory
    during the creation phase so nothing happens in execution phase
    for line 30 to line 33
    
    -> for result1, addNum() -> makes a separate execution context
    in which a new variable environment is formed along with a new 
    execution thread, on which all execution of js happens. 
    Everytime the function addNum is called, it would create a 
    separate execution context containing (new variable environment
    and new execution thread)
    
    -> since a new execution context is formed, so the previous two phases
    Memory Creation Phase and Execution Phase will occur for the function
    addNum()
    
    -> Memory Phase addNum(val1,val2): val1: undefined, 
                                       val2:undefined,
                                       total: undefined
    -> Execution Context addNum(val1,val2): num1 -> 10
                                            num2 -> 5
                                            total -> 15
        The value of variable total is returned to the parent execution
        context/ Global Execution context.                                    
        After the value of first function called is returned, the execution
        context made for function gets deleted and we return back to the 
        execution phase of global execution context. Now result1 has the 
        value returned by first function call which is 15
    

    -> For second function call addNum(10,2): the same proces happens.


    Call Stack in JS: when functions are called, they are added to call
    stack, one on top of another in sequence in which they are called
    and are removed from the stack as soon as they are executed.
    So basically LIFO (Last in first out) approach is followed

*/