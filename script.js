const menu_icon = document.querySelector(".menu")
const nav = document.querySelector(".navigator")
const mobile_connect = document.querySelector("#mobile_connect")
const mobile_connect_div = document.querySelector(".mobile-connect-div")
const mobile_product = document.querySelector("#mobile_product")
const mobile_product_div = document.querySelector(".mobile-product-div")
const mobile_company = document.querySelector("#mobile_company")
const mobile_company_div = document.querySelector(".mobile-company-div")


const product_wrapper = document.querySelector(".product-wrapper")
const product_dropdown = document.querySelector(".product-dropdown")
const company_wrapper = document.querySelector(".company-wrapper")
const company_dropdown = document.querySelector(".company-dropdown")
const connect_wrapper = document.querySelector(".connect-wrapper")
const connect_dropdown = document.querySelector(".connect-dropdown")

let product_angle = 0
let connect_angle = 0
let company_angle = 0

product_wrapper.addEventListener("click", () => {
    company_dropdown.classList.add("display")
    connect_dropdown.classList.add("display")

    product_angle = product_angle + 180

    product_wrapper.children[1].style.transform = `rotate(${product_angle}deg)`
    company_wrapper.children[1].style.transform = `rotate(0deg)`
    connect_wrapper.children[1].style.transform = `rotate(0deg)`
    company_angle = 0
    connect_angle = 0

    product_dropdown.classList.toggle("display")
})

company_wrapper.addEventListener("click", () => {
    product_dropdown.classList.add("display")
    connect_dropdown.classList.add("display")

    company_angle = company_angle + 180

    company_wrapper.children[1].style.transform = `rotate(${company_angle}deg)`
    product_wrapper.children[1].style.transform = `rotate(0deg)`
    connect_wrapper.children[1].style.transform = `rotate(0deg)`
    product_angle = 0
    connect_angle = 0

    company_dropdown.classList.toggle("display")
})

connect_wrapper.addEventListener("click", () => {
    product_dropdown.classList.add("display")
    company_dropdown.classList.add("display")

    connect_angle = connect_angle + 180

    connect_wrapper.children[1].style.transform = `rotate(${connect_angle}deg)`
    product_wrapper.children[1].style.transform = `rotate(0deg)`
    company_wrapper.children[1].style.transform = `rotate(0deg)`
    product_angle = 0
    company_angle = 0

    connect_dropdown.classList.toggle("display")
})

menu_icon.addEventListener("click", () => {
    nav.classList.toggle("display")

    // menu_icon.src = "images\\icon-close.svg"
    const index = menu_icon.src.lastIndexOf("images")
    const src = menu_icon.src.slice(index)

    console.log(menu_icon.src)
    console.log(src)

    if (src == "images/icon-hamburger.svg") {
        console.log("YES")
        menu_icon.src = "images\\icon-close.svg"
    } else {
        console.log("NO")
        menu_icon.src = "images\\icon-hamburger.svg"
    }
})

mobile_connect.addEventListener("click", () => {
    mobile_connect_div.classList.remove("display")
    mobile_product_div.classList.add("display")
    mobile_company_div.classList.add("display")
})

mobile_product.addEventListener("click", () => {
    mobile_product_div.classList.remove("display")
    mobile_connect_div.classList.add("display")
    mobile_company_div.classList.add("display")
})

mobile_company.addEventListener("click", () => {
    mobile_company_div.classList.remove("display")
    mobile_connect_div.classList.add("display")
    mobile_product_div.classList.add("display")
})