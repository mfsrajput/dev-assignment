const apiURL = 'https://66f91c912a683ce97310ee99.mockapi.io/api/v1/posts';

// Fetch posts from the API and display them
function fetchPosts(){
     // Show spinner before the fetch request
     document.getElementById('loadingSpinner').style.display = 'block';
    fetch(apiURL)
    .then(response => response.json())
    .then(data =>   {
        // Hide spinner once data is loaded
        document.getElementById('loadingSpinner').style.display = 'none';
        displayData(data);
    })
    .catch(error => {
        console.log('Error:', error);
        // Hide spinner if an error occurs
        document.getElementById('loadingSpinner').style.display = 'none';
    });
    
}

fetchPosts();

function displayData(posts){
    const postsParentDiv = document.getElementById('posts');
    postsParentDiv.innerHTML = '';

    posts.forEach(post => {
        console.log(post);

        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
         <div class="post">
            <div class="post-header">
                <img src="${post.avatar}" alt="Avatar">
                <div>
                    <h3>${post.name}</h3>
                    <small>${post.createdAt}</small>
                </div>
            </div>
            <p>${post.body}</p>
            <div class="actions">
                <button class="edit-btn" onclick="editPost(${post.id})">Edit</button>
                <button class="delete-btn" onclick="deletePost(${post.id})">Delete</button>
            </div>
        </div> `;
        postsParentDiv.appendChild(postDiv);
    });
}

// ================== Create Post ==================
document.getElementById('createPostForm').addEventListener('submit', function(e){
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const avatar = document.getElementById('avatar').value;
    const body = document.getElementById('body').value;
    
    const newPost = {
        name: name,
        title: title,
        avatar: avatar,
        body: body,
        createdAt: new Date().toISOString()
    };

    console.log(newPost);

    fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        fetchPosts();
        document.getElementById('createPostForm').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

// ================== Delete Post ==================
function deletePost(id){
    fetch(`${apiURL}/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(data => {
        console.log(data);
        alert(`${data.name} successfully deleted`);
        fetchPosts();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// ================== Edit Post ==================
function editPost(id){
    fetch(`${apiURL}/${id}`)
    .then(response => response.json())
    .then(post => {
        document.getElementById('create-post').style.display = 'none';
        document.getElementById('Update-post').style.display = 'block';

        document.getElementById('UpdatePostForm').name.value = post.name;
        document.getElementById('UpdatePostForm').title.value = post.title;
        document.getElementById('UpdatePostForm').avatar.value = post.avatar;
        document.getElementById('UpdatePostForm').body.value = post.body;

        // Store the post ID in a hidden dataset attribute
        document.getElementById('UpdatePostForm').dataset.postId = post.id;
    })
    .catch(error => console.log('Error:', error));
}

// ================== Update Post ==================
document.getElementById('UpdatePostForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = document.getElementById('UpdatePostForm').dataset.postId; // Get the post ID

    const name = document.getElementById('UpdatePostForm').name.value;
    const title = document.getElementById('UpdatePostForm').title.value;
    const avatar = document.getElementById('UpdatePostForm').avatar.value;
    const body = document.getElementById('UpdatePostForm').body.value;
    const createdAt = new Date().toISOString(); // Optionally use existing `createdAt`

    const updatedPost = {
        name: name,
        title: title,
        avatar: avatar,
        body: body,
        createdAt: createdAt
    };

    console.log(updatedPost);

    fetch(`${apiURL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPost)
    })
    .then(response => response.json())
    .then(data => {
        alert(`${data.name} successfully updated`);
        fetchPosts();
        document.getElementById('create-post').style.display = 'block';
        document.getElementById('Update-post').style.display = 'none';
        document.getElementById('UpdatePostForm').reset();
        delete document.getElementById('UpdatePostForm').dataset.postId; // Clear hidden post ID
    })
    .catch(error => console.log('Error:', error));
});
// ================== Cancel Update ==================
document.getElementById('cancelUpdate').addEventListener('click', function() {
    document.getElementById('create-post').style.display = 'block';
    document.getElementById('Update-post').style.display = 'none';
    document.getElementById('UpdatePostForm').reset(); // Reset the form
});
document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});