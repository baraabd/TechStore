var listOfProducts;


/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    var retrievedData = localStorage.getItem("kundVagenItem")
    var product = JSON.parse(retrievedData)

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
        shopItemImage.setAttribute("src", "./assets/" + product[i].image)
        shopItemImage.setAttribute("width", "200")
        shopItemImage.setAttribute("height", "320")
        shopItemImage.setAttribute("alt", "The Pulpit Rock")


        var shopItemDetails = document.createElement("div")
        shopItemDetails.classList = "shop-item-details"


        var shopItemPrice = document.createElement("span")
        shopItemPrice.classList = "shop-item-price"



        var shopItemButton = document.createElement("Button")
        var shopItemButtonName = document.createTextNode("Lägg till i kundvagn")
        shopItemButton.data = listOfProducts[i]
        shopItemButton.classList = "btn" + " " + "btn-primary" + " " + "shop-item-button"
        shopItemButton.appendChild(shopItemButtonName)
        shopItemButton.addEventListener("click", addData)
        shopItemButton.onclick = function() {
            console.log(this.data)
            addData()
        }



        shopItemTitle.innerText = product[i].title
        shopItemDescription.innerText = product[i].description
        shopItemImage.innerText = "./images" + product[i].image
        shopItemPrice.innerText = product[i].price


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




function addData() {

    var title = document.getElementsByClassName("title").innerHTML
    var description = document.getElementsByClassName("description").innerHTML
    var image = document.getElementsByClassName("image").src
    var price = document.getElementsByClassName("price").innerHTML
    var summa = document.getElementsByClassName("summa").innerHTML
    summa = parseInt(summa) + parseInt(price)
        //document.getElementById("summa").innerHTML = summa



    kundVagenItem.push({
        title: title,
        description: description,
        price: price,
        image: image,
        //count: count
    })

    localStorage.setItem("summa", JSON.stringify(summa))
    localStorage.setItem("kundVagenItem", JSON.stringify(kundVagenItem))

}