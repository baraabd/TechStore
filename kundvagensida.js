var total = 0


/** Get products from the localstorage and return the list */
function getCartItems() {
    var retrievedData = localStorage.getItem("listOfProducts")
    if (!retrievedData) { return [] }
    return JSON.parse(retrievedData)
}

function initSite() {
    addProductsToWebpage()
}

/** Uses the loaded products data to create a visible product list on the website */

function addProductsToWebpage() {
    // Check your console to see that the products are stored in the listOfProducts varible.
    document.getElementById("counter").innerHTML = getCartItems().length
    var totalPrice = 0
    var total = JSON.parse(localStorage.getItem('total'))
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

    cartItemsTitleIcon.classList = "fas fa-shopping-cart"
    cartItemsTitleContainer.classList = "cartItemsTitleContainer"
    cartItemsTitle.innerText = "Kundvagen"

    container.classList = "cartContainer" + " " + "content-section"
    shopItems.classList = "cart-items"

    var cartItems = getCartItems()

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
            removeItem(this.data, event)
        }

        var totalCartItemsPrice = document.createElement("div")
        totalCartItemsPrice.classList = "totalCartItemsPrice"
        totalCartItemsPrice.innerText = "Totalt pris: " + totalPrice + " kr"

        shopItemTitle.innerText = cartItems[i].title
        shopItemImage.innerText = "./images" + cartItems[i].image
        shopItemPrice.innerText = cartItems[i].price + " " + "kr"

        shopItem.appendChild(shopItemDetails)

        shopItemDetails.appendChild(shopItemImage)
        shopItemDetails.appendChild(shopItemTitle)
        shopItemDetails.appendChild(shopItemPrice)

        shopItem.appendChild(taBortButton)

        shopItems.appendChild(shopItem)
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


function delteData(product) {
    var cart = JSON.parse(localStorage.getItem('listOfProducts'))

    if (!cart) {
        cart = []
    }

    cart.push(product)
    localStorage.setItem("listOfProducts", JSON.stringify(cart))

    document.getElementById("counter").innerHTML = cart.length
}


function removeItem(index) {

    var cart = getCartItems()
    cart.splice(index, 1)
    localStorage.setItem("listOfProducts", JSON.stringify(cart))
    addProductsToWebpage()
}