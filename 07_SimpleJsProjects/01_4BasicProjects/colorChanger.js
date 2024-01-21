// setting color of color buttons

const buttonList = document.querySelectorAll('.box')
console.log(buttonList) // this is a node list -> forEach can be used
const body = document.querySelector('body')

buttonList.forEach((item) => {
    let colorName = item.textContent
    item.style.background = item.textContent

    item.addEventListener('click', function(e) {
        document.querySelector('h1').style.color = "White"
        document.querySelector('h3').style.color = "White"
        document.querySelector("#yellow").style.border = "solid white"
        console.log(e)
        console.log(e.target.id)
        if(e.target.id === "blue") {
            body.style.background = e.target.id
        } else  if(e.target.id === "green") {
            body.style.background = e.target.id
        } else  if(e.target.id === "yellow") {
            body.style.background = e.target.id
            document.querySelector('h1').style.color = "Black"
            document.querySelector('h3').style.color = "Black"
            e.target.style.border = "solid black"
        } else  if(e.target.id === "orange") {
            body.style.background = e.target.id
            document.querySelector('h1').style.color = "Black"
            document.querySelector('h3').style.color = "Black"
        }
    })
})