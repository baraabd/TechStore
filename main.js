var listOfProducts;
var total = 0
var userList = [{}]
    // var userList = [{
    //     username: "",
    //     password: "",
    //     orders: [{
    //         date: new Date(),
    //         products: []
    //     }]
    // }]

function loadProducts() {
    fetch("./products.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(products) {
            listOfProducts = products;
            addProductsToWebpage();
        });
}

function initSite() {
    loadProducts();
    var count = JSON.parse(localStorage.getItem('listOfProducts')).length
    document.getElementById("counter").innerHTML = count
}

function addProductsToWebpage() {

    for (var i = 0; i < listOfProducts.length; i++) {
        //  var container = document.createElement("section")
        var shopItems = createMobileCard(listOfProducts[i])
        document.getElementById("container").appendChild(shopItems)
    }
}

function createMobileCard(listOfProducts) {

    var shopItems = document.createElement("div")
    shopItems.classList = "shop-item" + " " + "content-section"

    var shopItemTitle = document.createElement("span")
    shopItemTitle.classList = "shop-item-title"

    var shopItemDescription = document.createElement("p")
    shopItemDescription.classList = "shop-item-description"

    var shopItemImage = document.createElement("IMG")
    shopItemImage.classList = "shop-item-image"
    shopItemImage.setAttribute("src", "./assets/" + listOfProducts.image)
    shopItemImage.setAttribute("width", "200")
    shopItemImage.setAttribute("height", "320")
    shopItemImage.setAttribute("alt", "The Pulpit Rock")


    var shopItemDetails = document.createElement("div")
    shopItemDetails.classList = "shop-item-details"

    var shopItemPrice = document.createElement("span")
    shopItemPrice.classList = "shop-item-price"

    shopItemTitle.innerText = listOfProducts.title
    shopItemDescription.innerText = listOfProducts.description
    shopItemImage.innerText = "./images" + listOfProducts.image
    shopItemPrice.innerText = listOfProducts.price + " " + "kr"

    var shopItemButton = document.createElement("i")
    shopItemButton.innerText = "Lägg till i kundvagn"
    shopItemButton.data = listOfProducts
    shopItemButton.classList = "fas fa-shopping-cart" + " " + "btn" + " " + "btn-primary" + " " + "shop-item-button"
    shopItemButton.onclick = function() {
        console.log(this.data)
        addData(this.data)
    }

    shopItems.appendChild(shopItemTitle)
    shopItems.appendChild(shopItemDescription)
    shopItems.appendChild(shopItemImage)
    shopItemDetails.appendChild(shopItemPrice)
    shopItemDetails.appendChild(shopItemButton)
    shopItems.appendChild(shopItemDetails)

    return shopItems;

}

function addData(product) {

    var cart = JSON.parse(localStorage.getItem('listOfProducts'))
    if (!cart) {
        cart = []
    }
    cart.push(product)
    total += parseInt(product.price)
    localStorage.setItem("listOfProducts", JSON.stringify(cart))
    localStorage.setItem("total", total)
    document.getElementById("counter").innerHTML = cart.length
}



function Generate() {

    var length = 4
    var result = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

// function register() {
//     var userList = JSON.parse(localStorage.getItem('userListL'))
//     var username = document.getElementById("regUsername").value
//     var password = Generate()
//     var email = document.getElementById("RegEmail").value
//     console.log(userList.length)
//     for (var i = 0; i < userList.length; i++) {
//         if (username == userList[i].username) {
//             console.log(userList[i].username)
//             alert("Du har registrerat redan")
//         } else if (username !== userList[i].username) {
//             console.log(i)
//             console.log(userList[i].username)
//             userList.push({ username: username, password: password, email: email, orders: [{ date: Date(), products: [] }] })
//             localStorage.setItem("userListL", JSON.stringify(userList))
//             break
//         }
//     }
// }

// function Login(product, userList) {
// var cart = JSON.parse(localStorage.getItem('listOfProducts'))
// if (!cart) {
//     cart = []
// }
// var userList = JSON.parse(localStorage.getItem('userListL'))
// for (var i = 1; i < userList.length; i++) {
//     if (username == userList[i].username) {
//         alert("Du har registrerat redan")
//     } else if (username !== userList[i].username) {
//         userList.push({ username: username, password: password, email: email, orders: [{ date: Date(), products: [] }] })
//         localStorage.setItem("userListL", JSON.stringify(userList))
//         break
//     }
// }
// }

function register(userList) {
    var userList = JSON.parse(localStorage.getItem('userListL'))
    var username = document.getElementById("regUsername").value
    var password = Generate()
    var email = document.getElementById("RegEmail").value

    for (var i = 1; i < userList.length; i++) {

        if (username == userList[i].username) {
            alert("Du har registrerat redan")
        } else if (username !== userList[i].username) {
            userList.push({ username: username, password: password, email: email, orders: [{ date: Date(), products: [] }] })
            localStorage.setItem("userListL", JSON.stringify(userList))
            break
        }
    }
}

function Login() {
    alert("fsdfs")
}