let searchForm =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');

       shoppingCart.classList.remove('active');
       loginForm.classList.remove('active');
       navbar.classList.remove('active');
       
}

let shoppingCart =document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
       searchForm.classList.remove('active');
       loginForm.classList.remove('active');
       navbar.classList.remove('active');
       
}

let loginForm =document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
   loginForm.classList.toggle('active');
   
       searchForm.classList.remove('active');
       shoppingCart.classList.remove('active');
       navbar.classList.remove('active');

}


let navbar =document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
   navbar.classList.toggle('active');
   
       searchForm.classList.remove('active');
       shoppingCart.classList.remove('active');
       loginForm.classList.remove('active');


}

  window.onscroll().onclick = () =>
    {
       searchForm.classList.remove('active');
       shoppingCart.classList.remove('active');
       loginForm.classList.remove('active');
       navbar.classList.remove('active');
       
    }



    function validateForm() {
      // Get the value of the email and password fields
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Regular expression for validating email format
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Validate email
      if (email.trim() === "") {
          alert("Please fill out the email field.");
          return false; // Prevent form submission
      } else if (!emailPattern.test(email)) {
          alert("Please enter a valid email address.");
          return false; // Prevent form submission
      }

      // Validate password
      if (password.length < 6) {
          alert("Password must be at least 6 characters long.");
          return false; // Prevent form submission
      }

      // If validation passes, allow form submission
      return true;
    }
