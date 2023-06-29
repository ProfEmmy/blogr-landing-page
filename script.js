const menu_icon = document.querySelector('.menu')
const nav = document.querySelector(".navigator")
const mobile_connect = document.querySelector("#mobile_connect")
const mobile_connect_div = document.querySelector(".mobile-connect-div")
const mobile_product = document.querySelector("#mobile_product")
const mobile_product_div = document.querySelector(".mobile-product-div")
const mobile_company = document.querySelector("#mobile_company")
const mobile_company_div = document.querySelector(".mobile-company-div")

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
    mobile_connect_div.classList.toggle("display")
    mobile_product_div.classList.add("display")
    mobile_company_div.classList.add("display")
})

mobile_product.addEventListener("click", () => {
    mobile_product_div.classList.toggle("display")
    mobile_connect_div.classList.add("display")
    mobile_company_div.classList.add("display")
})

mobile_company.addEventListener("click", () => {
    mobile_company_div.classList.toggle("display")
    mobile_connect_div.classList.add("display")
    mobile_product_div.classList.add("display")
})