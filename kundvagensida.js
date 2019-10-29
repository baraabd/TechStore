var product, listOfProducts



/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(products) {
            listOfProducts = products;
            addProductsToWebpage();
        });


    var retrievedData = localStorage.getItem("listOfProducts")
    product = JSON.parse(retrievedData)
    console.log(product)
    console.log(listOfProducts)
}

function initSite() {
    loadProducts()
    var count = JSON.parse(localStorage.getItem('listOfProducts')).length

    document.getElementById("counter").innerHTML = count
        // This would also be a good place to initialize other parts of the UI
}

/** Uses the loaded products data to create a visible product list on the website */

function addProductsToWebpage() {
    // Check your console to see that the products are stored in the listOfProducts varible.
    var total = JSON.parse(localStorage.getItem('total'))
    var body = document.getElementsByTagName("body")[0]
    var container = document.createElement("section")
    var shopItems = document.createElement("div")

    var cartItemsTitleContainer = document.createElement("div")
    var cartItemsTitle = document.createElement("div")
    cartItemsTitle.classList = "cartItemsTitle"
    var cartItemsTitleIcon = document.createElement("i")


    var totalCartItemsPrice = document.createElement("div")
    totalCartItemsPrice.classList = "totalCartItemsPrice"
    totalCartItemsPrice.innerText = "Totalt pris: " + total + " kr"

    var closedPurchase = document.createElement("i")
    closedPurchase.innerText = "Slut för dit köp"
    closedPurchase.classList = "fas fa-trash-alt" + " " + "btn" + " " + "closedPurchaseBtn" + " " + "cart-item-button "




    cartItemsTitleIcon.classList = "fas fa-shopping-cart"
    cartItemsTitleContainer.classList = "cartItemsTitleContainer"
    cartItemsTitle.innerText = "Kundvagen"

    container.classList = "cartContainer" + " " + "content-section"
    shopItems.classList = "cart-items"


    for (var i = 0; i < product.length; i++) {

        var shopItem = document.createElement("div")
        shopItem.classList = "cart-item"

        var shopItemTitle = document.createElement("span")
        shopItemTitle.classList = "shop-item-title"


        var shopItemImage = document.createElement("IMG")
        shopItemImage.classList = "cart-item-image"
        shopItemImage.setAttribute("src", "./assets/" + product[i].image)
        shopItemImage.setAttribute("width", "200")
        shopItemImage.setAttribute("height", "320")
        shopItemImage.setAttribute("alt", "The Pulpit Rock")


        var shopItemDetails = document.createElement("div")
        shopItemDetails.classList = "cart-item-details"


        var shopItemPrice = document.createElement("span")
        shopItemPrice.classList = "cart-item-price"



        var shopItemButton = document.createElement("i")
        shopItemButton.innerText = "Ta bort"
        shopItemButton.data = product[i]
        shopItemButton.classList = "fas fa-trash-alt" + " " + "btn" + " " + "cart-btn-primary" + " " + "cart-item-button"


        shopItemButton.onclick = function() {
            console.log(this.data)
            addData(this.data)
        }

        shopItemTitle.innerText = product[i].title
        shopItemImage.innerText = "./images" + product[i].image
        shopItemPrice.innerText = product[i].price + " " + "kr"



        shopItem.appendChild(shopItemDetails)

        shopItemDetails.appendChild(shopItemImage)
        shopItemDetails.appendChild(shopItemTitle)
        shopItemDetails.appendChild(shopItemPrice)


        shopItem.appendChild(shopItemButton)

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