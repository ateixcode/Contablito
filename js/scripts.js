let idCount = 0;
let products = [];

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("register-product-button").onclick = () => {

        let productName = document.getElementById("product-name").value;
        let productDescription = document.getElementById("product-description").value;
        let productsInStock = document.getElementById("products-in-stock").value;
        let productCost = document.getElementById("product-cost").value;

        idCount++;

        let productObject = { 'productName': productName, 'productDescription': productDescription, 'productsInStock': productsInStock, 'productCost': productCost, 'id': idCount };
        sessionStorage.setItem('product', productObject);

        let productListTable = document.getElementById("product-list-table");

        productListTable.innerHTML += `
        <tr>
            <td>` + productName + `</td>
            <td>` + productDescription + `</td>
            <td>` + productsInStock + `</td>
            <td>` + productCost + `</td>
            <td>` + idCount + `</td>
        </tr>
        `
    }
});

