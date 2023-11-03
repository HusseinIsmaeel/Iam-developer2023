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


/* the search bar of the webpage*/

document.addEventListener('DOMContentLoaded', function() {
    // Like button functionality
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', function() {
            let likeCount = this.nextElementSibling;
            let likes = parseInt(likeCount.textContent) || 0;
            likes++;
            likeCount.textContent = `${likes} Likes`;
        });
    });

    <script>
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('searchBox');
    const blogPosts = document.querySelectorAll('.blog-post');

    searchBox.addEventListener('keyup', function(e) {
        const searchQuery = e.target.value.toLowerCase();

        blogPosts.forEach(post => {
            const title = post.querySelector('h3').textContent.toLowerCase();
            const isVisible = title.includes(searchQuery);
            post.style.display = isVisible ? 'block' : 'none';
        });
    });
});
</script>


    // Comment form functionality
    document.querySelectorAll('.comment-form').forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            let commentInput = this.querySelector('input[type="text"]');
            let comment = commentInput.value.trim();
            if (comment) {
                let commentsList = this.nextElementSibling;
                let newComment = document.createElement('div');
                newComment.textContent = comment;
                commentsList.appendChild(newComment);
                commentInput.value = ''; // Clear input field
            }
        });
    });

    // Share button functionality
    document.querySelectorAll('.share-button').forEach(button => {
        button.addEventListener('click', function() {
            // This is a placeholder for share functionality
            alert('Share functionality to be implemented.');
        });
    });
});

