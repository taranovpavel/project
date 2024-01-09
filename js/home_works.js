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
let count = 1
const increment = () => {
    count ++
    box.style.left = `${count}px`
    console.log(count)
    if (count <448){
        window.requestAnimationFrame(increment)
    }
}
window.requestAnimationFrame(increment)

