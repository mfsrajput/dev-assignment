document.addEventListener('DOMContentLoaded', () => {
    const outputFirstName = document.getElementById("outputFirstName");
    const outputLastName = document.getElementById("outputLastName");
    const outputEmail = document.getElementById("outputSignUpEmail");
    const outputPassword = document.getElementById("outputSignUpPassword");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("signUpEmail");
    const password = document.getElementById("signUpPassword");
    const signupBtn = document.getElementById("signUpBtn");
    const signinBtn = document.getElementById("signInBtn");
    const signInForm = document.getElementById("signInForm");
    const signUpForm = document.getElementById("signUpForm");
    const toggleFormBtn = document.getElementById("toggleFormBtn");
    const loginButton = document.querySelector('.nav-btn'); // Assuming this is the login button
    let isLoggedIn = false; // Track the logged-in state

    const nameRegex = /^[A-Za-z]{2,}$/;
    const emailRegex = /([A-Za-z0-9._-]+@[A-Za-z0-9]+\.[A-Za-z]{2,})/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,16}$/;

    function signUpUser() {
        const firstNameValue = firstName.value;
        const lastNameValue = lastName.value;
        const emailValue = email.value;
        const passwordValue = password.value;

        const firstNameResult = nameRegex.test(firstNameValue);
        const lastNameResult = nameRegex.test(lastNameValue);
        const emailResult = emailRegex.test(emailValue);
        const passwordResult = passwordRegex.test(passwordValue);

        outputFirstName.textContent = firstNameResult ? "" : "Invalid First Name";
        outputLastName.textContent = lastNameResult ? "" : "Invalid Last Name";
        outputEmail.textContent = emailResult ? "" : "Invalid Email";
        outputPassword.textContent = passwordResult ? "" : "Invalid Password";

        if (firstNameResult && lastNameResult && emailResult && passwordResult) {
            const newUser = {
                firstName: firstNameValue,
                lastName: lastNameValue,
                email: emailValue,
                password: passwordValue
            };

            const usersData = JSON.parse(localStorage.getItem("users")) || [];
            usersData.push(newUser);
            localStorage.setItem("users", JSON.stringify(usersData));

            firstName.value = "";
            lastName.value = "";
            email.value = "";
            password.value = "";

            alert("Sign up successful! You can now log in.");
        }
    }

    function loginUser() {
        const emailValue = document.getElementById("signInEmail").value;
        const passwordValue = document.getElementById("signInPassword").value;

        const usersData = JSON.parse(localStorage.getItem("users")) || [];
        const user = usersData.find(u => u.email === emailValue && u.password === passwordValue);

        if (user) {
            alert("Login successful!");
            isLoggedIn = true;
            // Store the logged-in user's information in localStorage
            localStorage.setItem("currentUser", JSON.stringify(user));
            updateLoginButton();
        } else {
            alert("Invalid credentials. Please try again.");
        }

        document.getElementById("signInEmail").value = "";
        document.getElementById("signInPassword").value = "";
    }
    function updateLoginButton() {
        if (isLoggedIn) {
            loginButton.textContent = "Logout";
            loginButton.removeEventListener("click", loginUser);
            loginButton.addEventListener("click", logoutUser);

        } else {
            loginButton.textContent = "Login";
            loginButton.removeEventListener("click", logoutUser);
            loginButton.addEventListener("click", loginUser);
        }
    }
    function logoutUser() {
        isLoggedIn = false;
        alert("You have been logged out.");
        updateLoginButton();
    }

    signupBtn.addEventListener("click", signUpUser);
    signinBtn.addEventListener("click", loginUser);
    
    toggleFormBtn.addEventListener("click", () => {
        if (signUpForm.style.display === "none") {
            signUpForm.style.display = "block";
            signInForm.style.display = "none";
            toggleFormBtn.textContent = "Switch to Sign In";
        } else {
            signUpForm.style.display = "none";
            signInForm.style.display = "block";
            toggleFormBtn.textContent = "Switch to Sign Up";
        }
    });
    function showForm(){
        document.querySelector('.loginFormDisplay').classList.add('showLoginFormDisplay');
        
    }
    function hideForm(){
        document.querySelector('.loginFormDisplay').classList.remove('showLoginFormDisplay');
        
    }
    var btnLogin =document.querySelector('.nav-btn');
        btnLogin.addEventListener("click",showForm);
    
        var btnClose =document.querySelector('.close-btn');
        btnClose.addEventListener("click", hideForm);

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                hideForm();
            }
        });
        

   
});