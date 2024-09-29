document.addEventListener('DOMContentLoaded', () => {
    fetchUsers();
    fetchProducts();
    fetchPosts();
    fetchComments();
});

// Function to fetch users from DummyJSON API
const fetchUsers = async () => {
    try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        displayUsers(data.users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

// Function to display users
const displayUsers = (users) => {
    const userList = document.getElementById('userList');
    users.slice(0, 6).forEach(user => {
        userList.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="https://randomuser.me/api/portraits/lego/${user.id}.jpg" class="card-img-top" alt="${user.firstName}">
                    <div class="card-body">
                        <h5 class="card-title">${user.firstName} ${user.lastName}</h5>
                        <p class="card-text">${user.email}</p>
                    </div>
                </div>
            </div>
        `;
    });
};

// Function to fetch products from DummyJSON API
const fetchProducts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        displayProducts(data.products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

// Function to display products
const displayProducts = (products) => {
    const productList = document.getElementById('productList');
    products.slice(0, 6).forEach(product => {
        productList.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">Price: ${product.price} PKR</p>
                    </div>
                </div>
            </div>
        `;
    });
};

// Function to fetch posts from DummyJSON API
const fetchPosts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        displayPosts(data.posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};

// Function to display posts
const displayPosts = (posts) => {
    const postList = document.getElementById('postList');
    posts.slice(0, 3).forEach(post => {
        postList.innerHTML += `
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.body.substring(0, 100)}...</p>
                    </div>
                </div>
            </div>
        `;
    });
};

// Function to fetch comments from DummyJSON API
const fetchComments = async () => {
    try {
        const response = await fetch('https://dummyjson.com/comments');
        const data = await response.json();
        displayComments(data.comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
};

// Function to display comments
const displayComments = (comments) => {
    const commentsList = document.getElementById('commentsList');
    comments.slice(0, 4).forEach(comment => {
        commentsList.innerHTML += `
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">${comment.body}</p>
                        <footer class="blockquote-footer">By User ID: ${comment.user.id}</footer>
                    </div>
                </div>
            </div>
        `;
    });
};
