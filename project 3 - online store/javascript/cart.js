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


    }

    

});