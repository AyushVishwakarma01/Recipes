const getElement = (selector) =>{
 const element = document.querySelector(selector);
    if(element) return element
    throw Error(
        `please double chek your class names, there is no ${selector}
        class`
    )
}

const links =getElement('.nav-links')
const navBtnDom =getElement('.nav-btn')

navBtnDom.addEventListener('click',()=>{
    links.classList.toggle('show-links')
})

const data = getElement('#date')
const currentYear = new Date().getFullYear()
data.textContent = currentYear