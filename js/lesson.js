// phone check
const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () =>{
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = "green"
    } else {
        phoneResult.innerHTML = "NOT OK"
        phoneResult.style.color = "red"
    }
}

const tabContents = document.querySelectorAll(".tab_content_block")
const tabItems = document.querySelectorAll(".tab_content_item")
const tabsParent = document.querySelector(".tab_content_items")
const hideTabContent = () =>{
    tabContents.forEach((tabContent) =>{
        tabContent.style.display = "none"
    })
    tabItems.forEach((tabItem)=>{
        tabItem.classList.remove("tab_content_item_active")
    })
}

const showTabContent = (index = 0) =>{
    tabContents[index].style.display = "block"
    tabItems[index].classList.add("tab_content_item_active")
}
let i = 0
const autoContent = () =>{
    if (i < 5){
        showTabContent(i)
        i++
        setTimeout(autoContent,3000)
        setTimeout(hideTabContent,2999)
    }else{
        i = 0
        setTimeout(autoContent,1)
    }
}

hideTabContent()
autoContent()

// showTabContent(0)

tabsParent.onclick = (event) =>{
    if (event.target.classList.contains("tab_content_item")) {
        tabItems.forEach((tabItem,tabIndex) =>{
            if (event.target === tabItem) {
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}

window.addEventListener("scroll", scrollOpen = () =>{
    if (document.documentElement.scrollTop === 1667){
        modalOpen()
        window.removeEventListener("scroll",scrollOpen)
    }
})