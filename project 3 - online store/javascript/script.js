
document.getElementById('login-button').addEventListener('click', (event)=>{

    // Prevent default form submission behavior
    event.preventDefault(); 

    //get user data
    let email = document.getElementById('input-email').value;
    let password = document.getElementById('input-password').value;

    // console.log(email);
    // console.log(password);

    validateUserInput(email, password);
    
});

// Function to fetch and validate user input
async function validateUserInput(email, password) {

      // Fetch the JSON file containing user information
      let response = await fetch('db/users.json');

      // Parse the JSON data
      let jsonData = await response.json();

      // Extract the array of users
      let userData = jsonData.users;
  
      // Validate user input
      let user = userData.find(user => user.email === email && user.password === password);

      if (user) {

        // Save user profile in localStorage
        localStorage.setItem('userProfile', JSON.stringify(user));

        document.location.href='dashboard.html';
        
      } else {

        alert('Invalid email or password.');

      }

  }
