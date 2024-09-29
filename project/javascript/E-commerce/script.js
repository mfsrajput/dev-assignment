const productDiv = document.querySelector(".product");
const categoryListDiv = document.querySelector(".CategoryList");
const allCategory = [];
let currentSlide = 0; // To track the current slide
let autoSlideInterval; // To store the interval ID
let currentIndex = 0;
let products = [];
let cart = []; // Array to hold items in the cart

const heroImg = document.querySelector('.hero-img');
const heroCategory = document.querySelector('.hero-category');
const heroDetail = document.querySelector('.hero-detail');

// Function to truncate the title if it exceeds maxLength
const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
};

// Function to display the product slider
const displaySlider = (images) => {
    const slidesDiv = document.querySelector('.slides');
    slidesDiv.innerHTML = ''; // Clear existing slides

    images.forEach(img => {
        slidesDiv.innerHTML += `<img src="${img}" alt="Category Image">`;
    });

    // Set the initial position of the slides
    slidesDiv.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Start auto sliding
    startAutoSlide();
};

// Function to change slides
const changeSlide = (direction) => {
    const slidesDiv = document.querySelector('.slides');
    const totalSlides = slidesDiv.children.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Go to last slide
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Go back to first slide
    }

    slidesDiv.style.transform = `translateX(-${currentSlide * 100}%)`;
};

// Function to start auto sliding
const startAutoSlide = () => {
    // Clear any existing interval
    clearInterval(autoSlideInterval);
  
    // Set a new interval for automatic sliding
    autoSlideInterval = setInterval(() => {
        changeSlide(1); // Move to the next slide
    }, 3000); // Change slide every 3 seconds (3000 ms)
};

// Function to show toast notifications
const showToast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
};

// Function to add a product to the cart
const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex >= 0) {
        // If it exists, increase the quantity
        cart[existingProductIndex].quantity += 1;
    } else {
        // If it doesn't exist, add it to the cart with quantity 1
        cart.push({ ...product, quantity: 1 });
    }

    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the UI to reflect the cart changes
    updateCartDisplay();
    showToast(`${product.title} has been added to your cart!`); // Show toast notification
};

// Function to update the cart display
const updateCartDisplay = () => {
    const cartDisplay = document.querySelector('.cart-display tbody');
    cartDisplay.innerHTML = ''; // Clear existing cart display

    // Get cart data from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (storedCart.length === 0) {
        cartDisplay.innerHTML = '<tr><td colspan="4" class="text-center">Your cart is empty.</td></tr>';
    } else {
        storedCart.forEach(item => {
            cartDisplay.innerHTML += `
                <tr class="cart-item">
                    <td><img src="${item.image}" alt="${item.title}" class="img-thumbnail" style="width: 50px; height: auto;" /></td>
                    <td>${truncateTitle(item.title, 30)}</td>
                    <td>${item.price} Pkr</td>
                    <td>${item.quantity}</td>
                </tr>`;
        });

        // Display total price
        const totalPrice = storedCart.reduce((total, item) => total + (item.price * item.quantity), 0);
        cartDisplay.innerHTML += `<tr><td colspan="3" class="text-end"><strong>Total:</strong></td><td class="total-price text-danger">${totalPrice} Pkr</td></tr>`;
    }
};


// Debounce function
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

// Filter products based on selected categories with debounce
const categoryFilter = debounce(() => {
    const checkInput = document.querySelectorAll("input[type='checkbox']");
    const checkData = [...checkInput].filter(element => element.checked).map(element => element.value);
    displayProduct(checkData);
}, 300);

// Function to fetch and display products
const fetchProducts = async () => {
    showLoader();
    try {
        const response = await fetch('https://fakestoreapi.in/api/products');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        products = data.products;
        displayProduct();
        startHeroSlider();
    } catch (error) {
        console.error('Fetch error:', error);
    } finally {
        hideLoader();
    }
};

// Loader functions
const showLoader = () => {
    document.getElementById('loader').style.display = 'block';
};

const hideLoader = () => {
    document.getElementById('loader').style.display = 'none';
};

// Function to display products
const displayProduct = async (allCheckCategory = []) => {
    productDiv.innerHTML = "";
    const finalProduct = [];
    const categoryImages = new Set(); // To store unique images for categories

    try {
        const product = await fetch('https://fakestoreapi.in/api/products');
        if (!product.ok) throw new Error('Network response was not ok');
        
        const data = await product.json();
        finalProduct.push(...data.products);

        finalProduct.forEach(element => {
            // Populate category list for filters
            if (!allCategory.includes(element.category)) {
                categoryListDiv.innerHTML += `
                <label>
                    <input type="checkbox" onclick="categoryFilter()" value="${element.category}">
                    ${element.category}
                </label>`;
                allCategory.push(element.category);
            }

            // Set all categories if none are selected
            if (allCheckCategory.length === 0) {
                allCheckCategory.push(...allCategory);
            }

            // Display products
            if (allCheckCategory.includes(element.category)) {
                productDiv.innerHTML += `
                <div class="card productItems">
                    <img src="${element.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3>${truncateTitle(element.title, 20)}</h3>
                        <h4>${element.category}</h4>
                        <p>Price: ${element.price} Pkr</p>
                        <p>Brand: ${element.brand}</p>
                        <a href="#" class="btn btn-primary" onclick='addToCart(${JSON.stringify(element)})'>Add to Cart</a>
                    </div>
                </div>`;

                // Add one image per category to the slider
                categoryImages.add(element.image); // Use Set to avoid duplicates
            }
        });

        // Display the slider with the unique category images
        displaySlider([...categoryImages]);
    } catch (error) {
        console.error('Error displaying products:', error);
        alert('Failed to display products. Please try again later.');
    }
};

// Function to update hero section
const updateHeroSection = () => {
    const product = products[currentIndex];
    heroImg.src = product.image;
    heroCategory.textContent = product.category;
    heroDetail.textContent = product.title; // Assuming you want the product description here
    heroImg.classList.add('fade-in');

    // Remove the class after transition
    setTimeout(() => {
        heroImg.classList.remove('fade-in');
    }, 500);
};

// Start the slider for hero section
const startHeroSlider = () => {
    updateHeroSection();
    setInterval(() => {
        currentIndex = (currentIndex + 1) % products.length; // Loop through products
        updateHeroSection();
    }, 5000); // Change image every 5 seconds
};

// Initialize cart from localStorage
const storedCart = JSON.parse(localStorage.getItem('cart'));
cart = storedCart || [];

// Call the function to update the cart display on cart.html load
if (window.location.pathname.includes('cart.html')) {
    updateCartDisplay();
}

// Initialize products when the page loads
fetchProducts();
