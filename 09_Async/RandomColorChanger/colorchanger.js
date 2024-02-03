
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")

function randomColorGenerator() {
    let color = ""
    for (let index = 0; index < 3; index++) {
        color+= Math.floor(Math.random()*255)
        if(index<2){
            color += ","
        }
    }
    return document.body.style.backgroundColor = `rgba(${color})`
}


startBtn.addEventListener('click',function(){
    document.querySelector("body").style.transition = "all 5s";
    const changeBg = setInterval(function(){
        randomColorGenerator()
    },3000);

    stopBtn.addEventListener('click',function(){
        clearInterval(changeBg)
        document.body.style.backgroundColor = "#212121"
    });
})