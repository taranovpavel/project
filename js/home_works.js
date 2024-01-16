const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")
const regExp = /\w{8}@gmail.com$/

gmailButton.onclick = () =>{
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    } else {
        gmailResult.innerHTML = "NOT OK"
        gmailResult.style.color = "red"
    }
}
const box = document.querySelector(".child_block")
let x = 0
let y = 0
const max = 448
const move = () =>{
    if ((x !== max)&&(y === 0)){
        x++
        box.style.left = `${x}px`
        requestAnimationFrame(move)
    }else if ((y !== max)&&(x === max)){
        y++
        box.style.top = `${y}px`
        requestAnimationFrame(move)
    }else if ((y === max)&&(x > 0)){
        x--
        box.style.left = `${x}px`
        requestAnimationFrame(move)
    }else if ((x !== max)&&(y > 0)){
        y--
        box.style.top = `${y}px`
        requestAnimationFrame(move)
    }
}
move()

const seconds = document.querySelector("#seconds")
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")
let i = 0
let b = 0
let c = 0


const timer = () =>{
    if ((b === 0)&&(c <= 1)) {
        i++
        seconds.innerText = i
        setTimeout(timer, 1000)
    } else {
        b = 0
        c --
    }
}
start.addEventListener("click",start_func = () =>{c++})
start.addEventListener("click",timer,)
stop.addEventListener("click",stop_func = () =>{b++;c=1;})
reset.addEventListener("click",reset_func = () =>{i=0;b++;seconds.innerText= i})

window.addEventListener("scroll", scrollOpen = () =>{
    if (document.documentElement.scrollTop === 1147){
        modalOpen()
        window.removeEventListener("scroll",scrollOpen)
    }
})
