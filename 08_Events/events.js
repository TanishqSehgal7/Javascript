/*
Events in JS are executed sequentially

Events are called using the addEventListener method
Appends an event listener for events whose type attribute 
value is type. 
The callback argument sets the callback that will 
be invoked when the event is dispatched.

*/

const img6 = document.getElementById('Img6')
const imgOl = document.getElementById('imagesOl')
const container = document.getElementById('gridcontainer')

container.addEventListener('click', function(e) {
    console.log("Grid Container was clicked")
})

imgOl.addEventListener('click', function(e) {
    console.log("ImgOl was clicked")
})

img6.addEventListener('click', function(e) {
    console.log('Img6 clicked')
})

const imgList = document.querySelectorAll("img")

imgList.forEach(element => {
    console.log(element)
     
    element.addEventListener('click', function(e){
        e.preventDefault()
        console.log(`${element.id} was clicked`)
        // console.log(e)
     }, false)

     /* There are 3 parameters needed in addEventListener method, event name 
        callback function with an event object (e) as argument and a 
        boolean value which is by default false, so we need not mention it.
     */

    // attachEvent() is the corresponding method user earlier for Internet Explorer
    // jQuery -> corresponding method was onEvent()

    /* type, timestamp, defaultPrevented (to prevent submission in case of submit events, used in forms)
    , target, sourceElement, currentTarget, clientX, clientY, offset, screenX, screenY
    altKey, ctrlKey, shiftKey, keyCode, 
    */
});

/*
Event Propagation: has 2 contexts, Event Bubbling and Event Capturing

Event propagation is the tracking of events, be it any kind of event from
the innermost element to the outermost parent element
Event Bubbling is a concept in the DOM (Document Object Model). 
It happens when an element receives an event, and that event bubbles up 
(or you can say is transmitted or propagated) to its parent and 
ancestor elements in the DOM tree until it gets to the root element.

An event doesn't stop at the direct element that receives it. 
The event bubbles up to its ancestors, until it gets to the root element.

The "Event Bubbling" behavior makes it possible for you to handle an event 
in a parent element instead of the actual element that received the event.
The pattern of handling an event on an ancestor element is 
called Event Delegation.

Event capturing mode is enabled when we change the default boolean value
which is false to true. Event capturing happens from top most parent element
to the inner most child element. This is exactly opposite to event bubbling.

*/

// Event Capturing
const ulDiv = document.getElementById('myDiv')
const ul = document.getElementById('myUl')
// const imgA = document.getElementById('ImgA')
// const imgB = document.getElementById('ImgB')
const liA = document.getElementById('LiA')
const liB = document.getElementById('LiB')

ulDiv.addEventListener('click', function(e) {
    console.log(`Click event captured on ${ulDiv.id}`)
},true)

ul.addEventListener('click', function(e) {
    console.log(`Click event captured on ${ul.id}`)
},true)

// imgA.addEventListener('click', function(e) {
//     console.log(`Click event captured on ${imgA.id}`)
// },true)

// imgB.addEventListener('click', function(e) {
//     console.log.log(`Click event captured on ${imgB.id}`)
// },true)

liA.addEventListener('click', function(e) {
    console.log(`Click event captured on ${liA.id}`)
},true)

liB.addEventListener('click', function(e) {
    console.log(`Click event captured on ${liB.id}`)
},true)

// ------------------------ Stopping event propagation using e.stopPropagation() -----------------------
console.log("-------------------Stopping event propagation in event bubbling-------------------")

ulDiv.addEventListener('click', function(e) {
    console.log(`Click event bubbled on ${ulDiv.id}`)
    e.stopPropagation()
})

ul.addEventListener('click', function(e) {
    console.log(`Click event bubbled on ${ul.id}`)
    e.stopPropagation()
})

// imgA.addEventListener('click', function(e) {
//     console.log(`Click event captured on ${imgA.id}`)
// },true)

// imgB.addEventListener('click', function(e) {
//     console.log.log(`Click event captured on ${imgB.id}`)
// },true)

liA.addEventListener('click', function(e) {
    console.log(`Click event bubbled on ${liA.id}`)
    e.stopPropagation()
})

liB.addEventListener('click', function(e) {
    console.log(`Click event bubbled on ${liB.id}`)
    e.stopPropagation()
})

