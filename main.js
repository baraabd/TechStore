var listOfProducts;
var total = 0
    //var userList = [{}]
var userList = [{
    username: "Bara",
    password: "123",
    email: "bara.abd@yahoo.com",
    orders: [{
        date: new Date(),
        products: []
    }]
}, {
    username: "Salwa",
    password: "456",
    email: "bara.abd@yahoo.com",
    orders: [{
        date: new Date(),
        products: []
    }]
}, {
    username: "Anu",
    password: "789",
    email: "bara.abd@yahoo.com",
    orders: [{
        date: new Date(),
        products: []
    }]
}]

function changeCounterColor() {
    if (parseInt(document.getElementById("counter").innerHTML) != 0) {
        document.getElementById("counter").style.backgroundColor = "#E64E4E"
    } else {
        document.getElementById("counter").style.backgroundColor = "#F5F5F5"
    }
}

function loadProducts() {
    fetch("./products.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(products) {
            listOfProducts = products;
            addProductsToWebpage();
            localStorage.setItem("userList", JSON.stringify(userList))
        });
}

function initSite() {
    loadProducts();

    var count = 0
    if (JSON.parse(localStorage.getItem('listOfProducts'))) {
        count = JSON.parse(localStorage.getItem('listOfProducts')).length
    }
    document.getElementById("counter").innerHTML = count
}

function addProductsToWebpage() {
    for (var i = 0; i < listOfProducts.length; i++) {
        var shopItems = createMobileCard(listOfProducts[i])
        document.getElementById("container").appendChild(shopItems)
    }
    changeCounterColor()
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
    var checkCaseOfLogin = document.getElementById("signIn").innerText
    var modalSignin = document.getElementById('modalSignin')


    if (checkCaseOfLogin == "Logga in") {
        modalSignin.style.display = "block"

    } else {
        var cart = JSON.parse(localStorage.getItem('listOfProducts'))
        if (!cart) {
            cart = []
        }
        cart.push(product)
        total += parseInt(product.price)
        userList[0].orders.products = product
        console.log(userList)
        localStorage.setItem("listOfProducts", JSON.stringify(cart))
        localStorage.setItem("userList1", JSON.stringify(userList))
        localStorage.setItem("total", total)
        document.getElementById("counter").innerHTML = cart.length
        changeCounterColor()

    }
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



function register() {
    var userList = JSON.parse(localStorage.getItem('userList'))
    var username = document.getElementById("regUsername").value
    var password = Generate()
    var email = document.getElementById("RegEmail").value
    var modalRegister = document.getElementById('modalRegister')
    var accountExists = false

    for (var i = 0; i < userList.length; i++) {
        if (username == userList[i].username) {
            accountExists = true
            break
        }
    }
    if (accountExists) {
        // Konto finns
        alert("Du har registrerat redan")
    } else {
        // Konto finns ej
        userList.push({ username: username, password: password, email: email, orders: [{ date: new Date(), products: cart }] })
        localStorage.setItem("userList", JSON.stringify(userList))
        alert("Du har fått lösernord för att logga in:  " + password)
        modalRegister.style.display = "none"
    }
}

function login() {

    var userList = JSON.parse(localStorage.getItem('userList'))
    var cart = JSON.parse(localStorage.getItem('listOfProducts'))
    var username = document.getElementById("signUsername").value
    var password = document.getElementById("signPassword").value
    var modalSignin = document.getElementById('modalSignin')
    var modalRegister = document.getElementById('modalRegister')
    var accountExists = false

    if (!cart) {
        cart = []
    }

    for (var i = 0; i < userList.length; i++) {
        if ((username == userList[i].username) && (password == userList[i].password)) {
            accountExists = true
            break
        }
    }
    if (accountExists) {
        // Konto finns       
        var email = userList[i].email
        userList.splice(i, 1)
        userList.push({ username: username, password: password, email: email, orders: [{ date: new Date(), products: cart }] })
            //userList[i].orders.products = cart
        localStorage.setItem("userList", JSON.stringify(userList))
            //window.location.pathname = 'kundvagnsida.html'
        modalSignin.style.display = "none"
        document.getElementById("signIn").innerText = "Logga ut"
    } else {
        modalRegister.style.display = "block"
    }
}

// function findUser() {
//     var userList = JSON.parse(localStorage.getItem('userList'))
//     var cart = JSON.parse(localStorage.getItem('listOfProducts'))
//     var username = document.getElementById("signUsername").value
//     var password = document.getElementById("signPassword").value
//     for (var i = 0; i < userList.length; i++) {
//         if ((username == userList[i].username) && (password == userList[i].password)) {
//             accountExists = true
//             break
//         }
//     }
//     if (accountExists) {

//     }