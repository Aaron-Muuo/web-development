document.addEventListener('DOMContentLoaded', function() {

    let userProfile = localStorage.getItem('userProfile');

    // Check if userProfile exists in localStorage
    if (userProfile) {

        let user_data = JSON.parse(userProfile);

        document.getElementById('txt-username').innerHTML = user_data.username;
        document.getElementById('txt-email').innerHTML = user_data.email;
    }

    getProducts();
    

    document.getElementById('btn-logout').addEventListener('click', (event)=>{

        // Prevent default form submission behavior
        event.preventDefault();

       // Remove item from localStorage
        localStorage.removeItem('userProfile');

        // Clear all items from localStorage
        localStorage.clear();

        document.location.href='login.html';
    
       
    });

    async function getProducts() {

        let loading_section = document.getElementById('loading-section');

        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                loading_section.style.backgroundColor = "red";
                loading_section.style.display = "block";
                loading_section.style.innerHTML = "Failed to fetch product data";
                //throw new Error('Failed to fetch product data');
            }else{

                loading_section.style.display = "none";
            }
            const data = await response.json();
            displayProducts(data);
        } catch (error) {
            loading_section.style.backgroundColor = "red";
            loading_section.style.display = "block";
            loading_section.style.innerHTML = "Failed to fetch product data";
            console.error('Error fetching data:', error);
        }
     
        // fetch('https://fakestoreapi.com/products')
        // .then(response => response.json())
        // .then(data => {
        //     // Process the retrieved data
        //     console.log(data);
        // })
        // .catch(error => {
        //     console.error('Error fetching data:', error);
        // });
      }

      function displayProducts(products) {
        const productContainer = document.getElementById('product-container');
        
        products.forEach(product => {
            const section = document.createElement('section');
            section.classList.add('product');
            section.innerHTML = `
                <center>
                    <img src="${product.image}" width="150" heigh="150" alt="${product.title}">
                </center>
                <h4>${product.title}</h4>
                <p class="price">Kes. ${product.price} /-</p>
                <small class="category">Category: ${product.category}</small> <br>
                <small class="rating">Rating: ${product.rating.rate}</small> <br><br>
                <button class="add-to-cart" onclick="addToCart('${product.id}')" id="cart-${product.id}">Add to Cart</button>
            `;
            productContainer.appendChild(section);
        });

    }

    
});

function addToCart(productID) {

    //console.log(productID);

    // Retrieve cart items from localStorage or initialize as empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add item to cart
    cart.push(productID);

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    document.getElementById('cart-'+productID).classList.add("added");
    alert("You have added an item to cart.");
   
}