/** Get products from the localstorage and return the list */
function getCartItems() {
    var userList = JSON.parse(localStorage.getItem('userList'))
    var userIndex = JSON.parse(localStorage.getItem('index'))
    var retrievedData = userList[userIndex].products
    if (!retrievedData) { return [] }
    return retrievedData
}

function initSite() {
    addProductsToWebpage()
    loginInit()
}

/** Uses the loaded products data to create a visible product list on the website */

function addProductsToWebpage() {
    var userIndex = JSON.parse(localStorage.getItem('index'))
    var userList = JSON.parse(localStorage.getItem('userList'))

    // Check your console to see that the products are stored in the listOfProducts varible.
    function changeCounterColor() {
        if (getCartItems().length !== 0) {
            document.getElementById("counter").style.backgroundColor = "#E64E4E"
            cartItemsTitle.innerText = "Kundvagen"
        } else {
            document.getElementById("counter").style.backgroundColor = "#F5F5F5"
            cartItemsTitle.innerText = "Vagnen är tom"
        }
    }
    document.getElementById("counter").innerHTML = getCartItems().length
    var totalPrice = 0
    var cartItems = getCartItems()

    var body = document.getElementsByTagName("body")[0]
    var container = document.getElementsByTagName("main")[0]
    container.innerHTML = ''
    var shopItems = document.createElement("div")

    var cartItemsTitleContainer = document.createElement("div")
    var cartItemsTitle = document.createElement("div")
    cartItemsTitle.classList = "cartItemsTitle"
    var cartItemsTitleIcon = document.createElement("i")

    var closedPurchase = document.createElement("i")
    closedPurchase.innerText = "Slut för dit köp"
    closedPurchase.classList = "fas fa-trash-alt" + " " + "btn" + " " + "closedPurchaseBtn" + " " + "cart-item-button "
    closedPurchase.onclick = function() {
        deletedData(this.data)
    }

    cartItemsTitleIcon.classList = "fas fa-shopping-cart"
    cartItemsTitleContainer.classList = "cartItemsTitleContainer"
    cartItemsTitle.innerText = "Kundvagen"

    container.classList = "cartContainer" + " " + "content-section"
    shopItems.classList = "cart-items"
    changeCounterColor()
    for (var i = 0; i < cartItems.length; i++) {
        totalPrice += cartItems[i].price
        var shopItem = document.createElement("div")
        shopItem.classList = "cart-item"

        var shopItemTitle = document.createElement("span")
        shopItemTitle.classList = "shop-item-title"

        var shopItemImage = document.createElement("IMG")
        shopItemImage.classList = "cart-item-image"
        shopItemImage.setAttribute("src", "./assets/" + cartItems[i].image)
        shopItemImage.setAttribute("width", "200")
        shopItemImage.setAttribute("height", "320")
        shopItemImage.setAttribute("alt", "The Pulpit Rock")

        var shopItemDetails = document.createElement("div")
        shopItemDetails.classList = "cart-item-details"

        var shopItemPrice = document.createElement("span")
        shopItemPrice.classList = "cart-item-price"

        var taBortButton = document.createElement("i")
        taBortButton.innerText = "Ta bort"
        taBortButton.data = i
        taBortButton.classList = "fas fa-trash-alt" + " " + "btn" + " " + "cart-btn-primary" + " " + "cart-item-button"
        taBortButton.onclick = function() {
            removeItem(this.data)
        }

        var totalCartItemsPrice = document.createElement("div")
        totalCartItemsPrice.classList = "totalCartItemsPrice"
        totalCartItemsPrice.innerText = "Totalt pris: " + totalPrice + " kr"

        shopItemTitle.innerText = cartItems[i].title
        shopItemImage.innerText = "./images" + cartItems[i].image
        shopItemPrice.innerText = cartItems[i].price + " " + "kr"
        cartItems[i].price = totalPrice

        shopItem.appendChild(shopItemDetails)

        shopItemDetails.appendChild(shopItemImage)
        shopItemDetails.appendChild(shopItemTitle)
        shopItemDetails.appendChild(shopItemPrice)

        shopItem.appendChild(taBortButton)

        shopItems.appendChild(shopItem)
        userList[userIndex].total = totalPrice
        localStorage.setItem("userList", JSON.stringify(userList))

    }
    cartItemsTitleContainer.appendChild(cartItemsTitle)
    container.appendChild(cartItemsTitleContainer)
    container.appendChild(shopItems)
    container.appendChild(totalCartItemsPrice)
    container.appendChild(closedPurchase)
    body.appendChild(container)

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.
    // TODO: Remove the console.log and these comments when you've read them.
}

function removeItem(index) {
    var userIndex = JSON.parse(localStorage.getItem('index'))
    var userList = JSON.parse(localStorage.getItem('userList'))
    userList[userIndex].products.splice(index, 1)
    localStorage.setItem("userList", JSON.stringify(userList))
    if (userList[userIndex].products.length == 0) {
        userList[userIndex].total = 0
        localStorage.setItem("userList", JSON.stringify(userList))
    }
    addProductsToWebpage()
}

function deletedData() {
    var userIndex = JSON.parse(localStorage.getItem('index'))
    var userList = JSON.parse(localStorage.getItem('userList'))
    userList[userIndex].products.splice(0, userList[userIndex].products.length)
    userList[userIndex].total = 0
    localStorage.setItem("userList", JSON.stringify(userList))
    window.location.pathname = 'index.html'
    alert("Ditt köp har bekräftats")
}

function homePage() {
    var index = JSON.parse(localStorage.getItem('index'))
    var userList = JSON.parse(localStorage.getItem('userList'))
    document.getElementById("counter").innerHTML = userList[index].products.length
    changeCounterColor()
}

function loginInit() {
    var index = JSON.parse(localStorage.getItem('index'))
    var userList = JSON.parse(localStorage.getItem('userList'))
    var checkLogin = "Logga in"
    if (checkLoginCase() == checkLogin) {
        document.getElementById("counter").innerText = 0
    } else {
        document.getElementById("counter").innerText = userList[index].products.length
        changeCounterColor()
    }
}

function login1() {
    var checkLogin = "Logga in"
    localStorage.setItem("checkLogin", JSON.stringify(checkLogin))
    window.location.pathname = 'index.html'
    changeCounterColor()
}

function checkLoginCase() {
    var checkCaseOfLogin = JSON.parse(localStorage.getItem('checkLogin'))
    return checkCaseOfLogin
}

function changeCounterColor() {
    if (parseInt(document.getElementById("counter").innerHTML) != 0) {
        document.getElementById("counter").style.backgroundColor = "#E64E4E"
    } else {
        document.getElementById("counter").style.backgroundColor = "#F5F5F5"
    }
}