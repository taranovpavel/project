const body = document.querySelector("body")
const html = document.querySelector("html")
const modal = document.querySelector(".modal")
const modalOpenBtn = document.querySelector("#btn-get")
const modalCloseBtn = document.querySelector(".modal_close")
let height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight )

const  modalOpen = () => {
    modal.style.display = "block"
    body.style.overflow = "hidden"
}
const  modalClose = () => {
    modal.style.display = "none"
    body.style.overflow = ""

}
modalOpenBtn.onclick = () => modalOpen()
modalCloseBtn.onclick = () => modalClose()
modal.onclick = (event) => {
    if (event.target === modal) {
        modalClose()
    }
}
setTimeout(modalOpen,10000)