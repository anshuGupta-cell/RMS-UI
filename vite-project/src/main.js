const primaryNav = document.querySelector(".primary-navigation")
const navToggle = document.querySelectorAll(".nav-toggle")

Array.from(navToggle).forEach(btn => btn.addEventListener('click', () => {
    console.log(primaryNav.style.left);
    
    if (primaryNav.hasAttribute("data-visible")) {
        btn.setAttribute("aria-expanded", false)
    } else {
        btn.setAttribute("aria-expanded", true);
    }
primaryNav.toggleAttribute("data-visible")
}))


const categoryItems = document.querySelectorAll('.category-item')



const app = document.querySelector(".app")

const loadPage = async (page) => {
    const res = await fetch(page) 
    const data = await res.text()
    console.log(res.body);
    
    app.innerHTML = data
}

loadPage("./src/order/order.htm")