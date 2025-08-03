 async function fetchProducts(){
    try {
        // let button = document.getElementById('btn')
        // button.disabled = true
        
        let response = await fetch('https://fakestoreapi.com/products')
    let products = await response.json()
    console.log(products)

    let container = document.getElementById('productContainer')

    products.forEach((product, index)=>{
        //console.log(product.title, product.price)
        let productBox = document.createElement('div')

        productBox.innerHTML = `
        <h4>${product.title}</h4>
        <img src="${product.image}" alt="">
        <p>${product.price}</p>
        `
        container.appendChild(productBox)
    })
        
    } catch (error) {
        
    } 
 }
 fetchProducts()