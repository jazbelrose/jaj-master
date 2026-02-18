let articles = []; // Array to hold all blog posts
let currentPostIndex = 0; // This will be updated with the current post's index

// Function to get the current post slug from the URL
function getCurrentPostSlug() {
  const urlPath = window.location.pathname;
  const slug = urlPath.split('/').pop().replace('.html', ''); // Assumes the URL ends with the post's slug
  return slug;
}

let currentPostSlug = getCurrentPostSlug(); // Get the current post slug

// Fetch blog posts from the JSON file
fetch('js/blogPosts.json')
  .then(response => response.json())
  .then(data => {
    articles = data; // Store the fetched blog posts in the 'articles' array
    currentPostIndex = articles.findIndex(article => article.slug === currentPostSlug); // Find current post index
    updatePostNavigation(currentPostIndex); // Call navigation function once articles are loaded
  })
  .catch(error => console.error('Error fetching articles:', error));

// Function to update the previous and next post navigation
function updatePostNavigation(currentPostIndex) {
  const postNavigation = document.getElementById('post-navigation');
  postNavigation.innerHTML = ''; // Clear previous navigation

  const totalPosts = articles.length;

  // Calculate previous and next indices with looping
  const prevPostIndex = (currentPostIndex - 1 + totalPosts) % totalPosts; // Loop back to last post if at the first post
  const nextPostIndex = (currentPostIndex + 1) % totalPosts; // Loop to the first post if at the last post

// Add Previous post navigation
const prevArticle = articles[prevPostIndex];
postNavigation.innerHTML += `
  <li class="post-nav-item">
    <div class="post-nav-tag">
      <a href="${prevArticle.slug}.html" class="tag">PREVIOUS</a>
    </div>
    <div class="post-nav-title">
      <a href="${prevArticle.slug}.html" class="title">${prevArticle.title}</a>
    </div>
    <div class="post-nav-meta">
      <i class="fa fa-clock-o"></i> ${prevArticle.date} - ${prevArticle.readingTime} min
    </div>
  </li>
`;

// Add Next post navigation
const nextArticle = articles[nextPostIndex];
postNavigation.innerHTML += `
  <li class="post-nav-item">
    <div class="post-nav-tag">
      <a href="${nextArticle.slug}.html" class="tag">NEXT</a>
    </div>
    <div class="post-nav-title">
      <a href="${nextArticle.slug}.html" class="title">${nextArticle.title}</a>
    </div>
    <div class="post-nav-meta">
      <i class="fa fa-clock-o"></i> ${nextArticle.date} - ${nextArticle.readingTime} min
    </div>
  </li>
`;

}
