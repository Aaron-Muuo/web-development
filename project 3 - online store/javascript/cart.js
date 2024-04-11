document.addEventListener('DOMContentLoaded', function() {

    let userProfile = localStorage.getItem('userProfile');

    // Check if userProfile exists in localStorage
    if (userProfile) {

        let user_data = JSON.parse(userProfile);

        document.getElementById('txt-username').innerHTML = user_data.username;
        document.getElementById('txt-email').innerHTML = user_data.email;
    }

    getCart();
    

    document.getElementById('btn-logout').addEventListener('click', (event)=>{

        // Prevent default form submission behavior
        event.preventDefault();

       // Remove item from localStorage
        localStorage.removeItem('userProfile');

        // Clear all items from localStorage
        localStorage.clear();

        document.location.href='login.html';
    
       
    });

    function getCart() {

        // Retrieve cart items from localStorage
        const cartItems = JSON.parse(localStorage.getItem('cart'));

        if(cartItems && cartItems.length >0){
            // Use cartItems as needed (e.g., display in checkout page)
            console.log('Cart items:', cartItems);
            let totalPrice = 0;

            cartItems.forEach(productID => {

                fetch('https://fakestoreapi.com/products/'+productID)
                .then(res=>res.json())
                .then(product=>{

                    document.getElementById('cart').innerHTML += `
                    <div class="cart">
                        <img src="${product.image}" width="50"/> <br>
                    <p> ${product.title}</p>
                    <p> ${product.description}</p>
                    <p> Price: KES. ${product.price}/-</p>
                    <button class="remove-from-cart" onclick="removeFromCart('${product.id}')">Remove from Cart</button>
                    </div>
                    `;

                 
                    totalPrice = totalPrice + parseFloat(product.price);
                   
                    document.getElementById('txt-price').innerHTML = `
                        Total price is: Kes. ${totalPrice}
                        <a href="checkout.html"> Proceed to checkout</a>
                    `;

                });
                
            });

        }else{

            document.getElementById('cart').innerHTML += `
            <h2>It seems your cart is empty</h2>
            `;

        }
       

    }

    

});

function removeFromCart(productID){

    //console.log(productID);

// Retrieve cart items from localStorage or initialize as empty array
let cart = JSON.parse(localStorage.getItem('cart'));

let index = cart.indexOf(productID);

let newCart = cart.splice(index, 1);

// Save updated cart to localStorage
localStorage.setItem('cart', JSON.stringify(cart));

document.location.href = "cart.html";

}