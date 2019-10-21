var listOfProducts;

// testComment

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
}

function initSite() {
    loadProducts();
    var body = document.getElementsByTagName("body")[0]
    var container = document.createElement("div")
    container.classList = "container"

    // This would also be a good place to initialize other parts of the UI
}

/** Uses the loaded products data to create a visible product list on the website */

function addProductsToWebpage() {
    // Check your console to see that the products are stored in the listOfProducts varible.

    var body = document.getElementsByTagName("body")[0]
    var container = document.createElement("section")
    var shopItems = document.createElement("div")
    container.classList = "container" + " " + "content-section"
    shopItems.classList = "shop-items"


    for (var i = 0; i < listOfProducts.length; i++) {

        var shopItem = document.createElement("div")
        shopItem.classList = "shop-item"

        var shopItemTitle = document.createElement("span")
        shopItemTitle.classList = "shop-item-title"

        var shopItemDescription = document.createElement("p")
        shopItemDescription.classList = "shop-item-description"


        var shopItemImage = document.createElement("IMG")
        shopItemImage.classList = "shop-item-image"
        shopItemImage.setAttribute("src", "./assets/" + listOfProducts[i].image)
        shopItemImage.setAttribute("width", "200")
        shopItemImage.setAttribute("height", "320")
        shopItemImage.setAttribute("alt", "The Pulpit Rock")


        var shopItemDetails = document.createElement("div")
        shopItemDetails.classList = "shop-item-details"


        var shopItemPrice = document.createElement("span")
        shopItemPrice.classList = "shop-item-price"


        var shopItemButton = document.createElement("button")
        shopItemButton.innerText = "Lägg till i kundvagn"
        shopItemButton.classList = "btn" + " " + "btn-primary" + " " + "shop-item-button"



        shopItemTitle.innerText = listOfProducts[i].title
        shopItemDescription.innerText = listOfProducts[i].description
        shopItemImage.innerText = "./images" + listOfProducts[i].image
        shopItemPrice.innerText = listOfProducts[i].price





        shopItem.appendChild(shopItemTitle)
        shopItem.appendChild(shopItemDescription)
        shopItem.appendChild(shopItemImage)
        shopItem.appendChild(shopItemDetails)





        shopItemDetails.appendChild(shopItemPrice)
        shopItemDetails.appendChild(shopItemButton)


        shopItems.appendChild(shopItem)


    }
    container.appendChild(shopItems)
    body.appendChild(container)


    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.

    // TODO: Remove the console.log and these comments when you've read them.
}