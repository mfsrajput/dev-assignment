let users = [];

const fetchUserData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        users = await response.json();
        displayUserList(users);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
};

const fetchUserPosts = async (userId) => {
    showLoading(); // Show loading while fetching posts
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await response.json();
        displayUserPosts(posts);
    } catch (error) {
        console.error('Error fetching user posts:', error);
    }
};

const displayUserList = (users) => {
    const userListDiv = document.getElementById('user-list');
    userListDiv.innerHTML = `
        <h2>User List</h2>
        ${users.map((user, index) => `
            <p class="username" onclick="fetchUserPosts(${user.id})">${index + 1}. ${user.username}</p>
        `).join('')}

    `;
};

const displayUserPosts = (posts) => {
    const userPostsDiv = document.getElementById('user-posts');
    userPostsDiv.innerHTML = `
        <h2 class="sticky-header">User Posts</h2>
        ${posts.map((post, index) => `
            <div>
                <h3>${index + 1}. ${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `).join('')}
    `;
    // Show card2 with animation
    const card2 = document.querySelector('#user-posts');
    card2.classList.add('show');
};
// Hide card2 initially
document.addEventListener('DOMContentLoaded', () => {
    const card2 = document.querySelector('card2');
    card2.classList.remove('show');
});

const showLoading = () => {
    const userPostsDiv = document.getElementById('user-posts');
    userPostsDiv.innerHTML = '<h2>User Posts</h2><p>Loading...</p>';
};

// Fetch the user data on page load
fetchUserData();
