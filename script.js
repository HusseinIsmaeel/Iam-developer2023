document.addEventListener('DOMContentLoaded', function() {
    // This URL should point to the API or backend service providing the blog posts.
    const apiUrl = 'https://api.yourbackend.com/posts';

    // Fetch the blog posts from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('blog-posts');
            // Clear the posts container
            postsContainer.innerHTML = '';

            // Add each post to the container
            posts.forEach(post => {
                const postBlock = document.createElement('div');
                postBlock.className = 'post-block';
                postBlock.innerHTML = `
                    <img src="${post.imageUrl}" alt="${post.title}">
                    <h3><a href="${post.url}">${post.title}</a></h3>
                `;
                postsContainer.appendChild(postBlock);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});
