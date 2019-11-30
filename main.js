var listOfProducts
var total = 0
var index = JSON.parse(localStorage.getItem('index'))
var goToProductsPageStatus


function loadProducts() {
    fetch("./products.json")
        .then(function(response) {
            return response.json()
        })
        .then(function(products) {
            listOfProducts = products
            addProductsToWebpage()
        })
}

function initSite() {
    loadProducts()
    loginInit()

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
    return shopItems
}

function addData(product) {
    var index = JSON.parse(localStorage.getItem('index'))
    var userList = JSON.parse(localStorage.getItem('userList'))
    var checkCaseOfLogin = document.getElementById("signIn").innerText
    var modalSignin = document.getElementById('modalSignin')
    var cart = JSON.parse(localStorage.getItem('listOfProducts'))

    if (!cart) {
        cart = []
    }

    if (!userList) {
        userList = []
    }

    if (checkCaseOfLogin == "Logga in") {
        modalSignin.style.display = "block"

    } else {
        cart.push(product)
        total += parseInt(product.price)
        userList[index].total = total
        userList[index].products.push(product)
        localStorage.setItem("userList", JSON.stringify(userList))
        document.getElementById("counter").innerHTML = userList[index].products.length
        changeCounterColor()
    }
}

function GeneratePass() {
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
    var index = JSON.parse(localStorage.getItem('index'))
    var userList = JSON.parse(localStorage.getItem('userList'))
    var username = document.getElementById("regUsername").value
    var password = GeneratePass()
    var email = document.getElementById("RegEmail").value
    var modalRegister = document.getElementById('modalRegister')
    var accountExists = false

    if (!userList) {
        userList = []
    }
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
        userList.push({ username: username, password: password, email: email, total: 0, products: [] })
        localStorage.setItem("userList", JSON.stringify(userList))
        alert("Du har fått lösernord för att logga in:  " + password)
        modalRegister.style.display = "none"
    }
}

function login() {
    var userList = JSON.parse(localStorage.getItem('userList'))
    var username = document.getElementById("signUsername").value
    var password = document.getElementById("signPassword").value
    var modalSignin = document.getElementById('modalSignin')
    var modalRegister = document.getElementById('modalRegister')
    var accountExists = false
    if (!userList) {
        userList = []
    }
    for (var i = 0; i < userList.length; i++) {
        if ((username == userList[i].username) && (password == userList[i].password)) {
            accountExists = true
            break
        }
    }
    if (accountExists) {
        //Konto finns
        if (goToProductsPageStatus) {
            var checkLogin = "Logga ut"
            document.getElementById("counter").innerHTML = userList[i].products.length
            modalSignin.style.display = "none"
            document.getElementById("signIn").innerText = checkLogin
            localStorage.setItem("checkLogin", JSON.stringify(checkLogin))
            localStorage.setItem("index", JSON.stringify(i))
            changeCounterColor()
            window.location.pathname = 'kundvagnsida.html'
            goToProductsPageStatus = false
        } else {
            var checkLogin = "Logga ut"
            document.getElementById("counter").innerHTML = userList[i].products.length
            modalSignin.style.display = "none"
            document.getElementById("signIn").innerText = checkLogin
            localStorage.setItem("checkLogin", JSON.stringify(checkLogin))
            localStorage.setItem("index", JSON.stringify(i))
            changeCounterColor()
        }

    } else {
        modalRegister.style.display = "block"
    }
}

function login1() {
    var checkLogin = "Logga in"
    if (checkLoginCase() == checkLogin) {
        modalSignin.style.display = "block"
    } else {
        document.getElementById("counter").innerText = 0
        document.getElementById("signIn").innerText = checkLogin
        localStorage.setItem("checkLogin", JSON.stringify(checkLogin))
        changeCounterColor()
    }
}



function loginInit() {
    var userList = JSON.parse(localStorage.getItem('userList'))
    var checkLogin = "Logga in"
    if (checkLoginCase() == checkLogin) {
        document.getElementById("counter").innerText = 0
    } else {
        document.getElementById("counter").innerText = userList[index].products.length
        document.getElementById("signIn").innerText = "Logga ut"
        changeCounterColor()
    }
}

function checkLoginCase() {
    var checkCaseOfLogin = JSON.parse(localStorage.getItem('checkLogin'))
    return checkCaseOfLogin
}

function goToProductspage() {
    if (checkLoginCase() == "Logga in") {
        modalSignin.style.display = "block"
        goToProductsPageStatus = true
    } else {
        window.location.pathname = 'kundvagnsida.html'
    }
}



function changeCounterColor() {
    if (parseInt(document.getElementById("counter").innerHTML) != 0) {
        document.getElementById("counter").style.backgroundColor = "#E64E4E"
    } else {
        document.getElementById("counter").style.backgroundColor = "#F5F5F5"
    }
}

function getEventListener() {
    document.addEventListener('click', function(e) {
        e = e || window.event
        var target = e.target || e.srcElement,
            text = target.textContent || target.innerText
        alert(text)
    }, false)

}